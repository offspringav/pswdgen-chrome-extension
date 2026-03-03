// Background Service Worker для Chrome Extension

// Создаем context menu при установке
chrome.runtime.onInstalled.addListener(() => {
  // Context menu для полей ввода
  chrome.contextMenus.create({
    id: 'generate-password',
    title: 'Generate Password',
    contexts: ['editable']
  });

  chrome.contextMenus.create({
    id: 'generate-passphrase',
    title: 'Generate Passphrase',
    contexts: ['editable']
  });

  chrome.contextMenus.create({
    id: 'generate-pin',
    title: 'Generate PIN',
    contexts: ['editable']
  });
});

// Обработка кликов по context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'generate-password') {
    generateAndInsert(tab.id, 'password');
  } else if (info.menuItemId === 'generate-passphrase') {
    generateAndInsert(tab.id, 'passphrase');
  } else if (info.menuItemId === 'generate-pin') {
    generateAndInsert(tab.id, 'pin');
  }
});

// Обработка команд клавиатуры
chrome.commands.onCommand.addListener((command) => {
  if (command === 'generate-password') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        generateAndInsert(tabs[0].id, 'password');
      }
    });
  }
});

// Генерация и вставка пароля
async function generateAndInsert(tabId, type) {
  try {
    let value;
    
    if (type === 'password') {
      // Загружаем сохраненные настройки или используем дефолтные
      const result = await chrome.storage.local.get(['passwordSettings']);
      const config = result.passwordSettings || {
        length: 16,
        useUppercase: true,
        useLowercase: true,
        useDigits: true,
        useSpecial: true,
        excludeAmbiguous: false
      };
      
      // Генерируем пароль (используем тот же код что и в popup)
      value = generatePassword(config);
    } else if (type === 'passphrase') {
      const result = await chrome.storage.local.get(['passphraseSettings']);
      const config = result.passphraseSettings || {
        wordCount: 4,
        separator: '-',
        capitalize: true,
        includeNumber: true
      };
      
      value = await generatePassphrase(config);
    } else if (type === 'pin') {
      const result = await chrome.storage.local.get(['pinSettings']);
      const config = result.pinSettings || {
        length: 6,
        excludeRepeated: true
      };
      
      value = generatePin(config);
    }

    // Отправляем в content script для вставки
    chrome.tabs.sendMessage(tabId, {
      action: 'insertPassword',
      password: value
    });

    // Сохраняем в историю
    saveToHistory(type, value);
  } catch (error) {
    console.error('Generation failed:', error);
  }
}

// Простые генераторы (копия логики из core)
function generatePassword(config) {
  const CharacterSets = {
    UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
    DIGITS: '0123456789',
    SPECIAL: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    AMBIGUOUS: '0Ol1I'
  };

  let charset = '';
  if (config.useUppercase) charset += CharacterSets.UPPERCASE;
  if (config.useLowercase) charset += CharacterSets.LOWERCASE;
  if (config.useDigits) charset += CharacterSets.DIGITS;
  if (config.useSpecial) charset += CharacterSets.SPECIAL;

  if (config.excludeAmbiguous) {
    const ambiguous = CharacterSets.AMBIGUOUS.split('');
    charset = charset.split('').filter(char => !ambiguous.includes(char)).join('');
  }

  let password = '';
  const array = new Uint8Array(config.length);
  crypto.getRandomValues(array);

  for (let i = 0; i < config.length; i++) {
    password += charset[array[i] % charset.length];
  }

  return password;
}

async function generatePassphrase(config) {
  // Для background worker используем упрощенную версию
  const words = ['correct', 'horse', 'battery', 'staple', 'monkey', 'dragon', 'wizard', 'castle'];
  const selected = [];
  
  for (let i = 0; i < config.wordCount; i++) {
    const array = new Uint8Array(1);
    crypto.getRandomValues(array);
    let word = words[array[0] % words.length];
    
    if (config.capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    selected.push(word);
  }

  let passphrase = selected.join(config.separator);

  if (config.includeNumber) {
    const array = new Uint8Array(2);
    crypto.getRandomValues(array);
    const num = (array[0] * 256 + array[1]) % 10000;
    passphrase += num.toString();
  }

  return passphrase;
}

function generatePin(config) {
  let pin = '';
  let previousDigit = null;

  for (let i = 0; i < config.length; i++) {
    let digit;
    
    do {
      const array = new Uint8Array(1);
      crypto.getRandomValues(array);
      digit = (array[0] % 10).toString();

      if (!config.excludeRepeated || digit !== previousDigit) {
        break;
      }
    } while (true);

    pin += digit;
    previousDigit = digit;
  }

  return pin;
}

function saveToHistory(type, value) {
  chrome.storage.local.get(['history'], (result) => {
    const history = result.history || [];
    history.unshift({
      type,
      value,
      timestamp: Date.now()
    });
    
    const trimmedHistory = history.slice(0, 50);
    chrome.storage.local.set({ history: trimmedHistory });
  });
}
