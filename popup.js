// Инициализация генераторов
const passwordGenerator = new PasswordGenerator(cryptoService);
const passphraseGenerator = new PassphraseGenerator(cryptoService);
const pinGenerator = new PinGenerator(cryptoService);

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.dataset.tab;
    
    // Update tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // Update content
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
  });
});

// Password Generator
const passwordLengthSlider = document.getElementById('password-length');
const passwordLengthValue = document.getElementById('password-length-value');
const passwordResult = document.getElementById('password-result');

passwordLengthSlider.addEventListener('input', (e) => {
  passwordLengthValue.textContent = e.target.value;
});

document.getElementById('generate-password').addEventListener('click', () => {
  try {
    const config = {
      length: parseInt(passwordLengthSlider.value),
      useUppercase: document.getElementById('use-uppercase').checked,
      useLowercase: document.getElementById('use-lowercase').checked,
      useDigits: document.getElementById('use-digits').checked,
      useSpecial: document.getElementById('use-special').checked,
      excludeAmbiguous: document.getElementById('exclude-ambiguous').checked
    };

    const password = passwordGenerator.generate(config);
    passwordResult.value = password;
    
    // Save to storage
    saveToHistory('password', password);
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById('copy-password').addEventListener('click', () => {
  if (passwordResult.value) {
    copyToClipboard(passwordResult.value);
  }
});

document.getElementById('insert-password').addEventListener('click', () => {
  if (passwordResult.value) {
    insertIntoPage(passwordResult.value);
  }
});

// Passphrase Generator
const wordCountSlider = document.getElementById('word-count');
const wordCountValue = document.getElementById('word-count-value');
const passphraseResult = document.getElementById('passphrase-result');

wordCountSlider.addEventListener('input', (e) => {
  wordCountValue.textContent = e.target.value;
});

document.getElementById('generate-passphrase').addEventListener('click', async () => {
  try {
    const config = {
      wordCount: parseInt(wordCountSlider.value),
      separator: document.getElementById('separator').value,
      capitalize: document.getElementById('capitalize').checked,
      includeNumber: document.getElementById('include-number').checked
    };

    const passphrase = await passphraseGenerator.generate(config);
    passphraseResult.value = passphrase;
    
    // Save to storage
    saveToHistory('passphrase', passphrase);
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById('copy-passphrase').addEventListener('click', () => {
  if (passphraseResult.value) {
    copyToClipboard(passphraseResult.value);
  }
});

document.getElementById('insert-passphrase').addEventListener('click', () => {
  if (passphraseResult.value) {
    insertIntoPage(passphraseResult.value);
  }
});

// PIN Generator
const pinResult = document.getElementById('pin-result');

document.getElementById('generate-pin').addEventListener('click', () => {
  try {
    const config = {
      length: parseInt(document.getElementById('pin-length').value),
      excludeRepeated: document.getElementById('exclude-repeated').checked
    };

    const pin = pinGenerator.generate(config);
    pinResult.value = pin;
    
    // Save to storage
    saveToHistory('pin', pin);
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById('copy-pin').addEventListener('click', () => {
  if (pinResult.value) {
    copyToClipboard(pinResult.value);
  }
});

document.getElementById('insert-pin').addEventListener('click', () => {
  if (pinResult.value) {
    insertIntoPage(pinResult.value);
  }
});

// Helper functions
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

function insertIntoPage(text) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'insertPassword',
      password: text
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Insert failed:', chrome.runtime.lastError);
        copyToClipboard(text);
        showNotification('Copied to clipboard (auto-insert not available)');
      } else {
        showNotification('Inserted into page!');
        window.close();
      }
    });
  });
}

function saveToHistory(type, value) {
  chrome.storage.local.get(['history'], (result) => {
    const history = result.history || [];
    history.unshift({
      type,
      value,
      timestamp: Date.now()
    });
    
    // Keep only last 50 items
    const trimmedHistory = history.slice(0, 50);
    
    chrome.storage.local.set({ history: trimmedHistory });
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: #4a9eff;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 13px;
    z-index: 10000;
    animation: fadeInOut 2s ease-in-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Load saved settings on startup
chrome.storage.local.get(['passwordSettings', 'passphraseSettings', 'pinSettings'], (result) => {
  if (result.passwordSettings) {
    const settings = result.passwordSettings;
    if (settings.length) passwordLengthSlider.value = settings.length;
    if (settings.useUppercase !== undefined) document.getElementById('use-uppercase').checked = settings.useUppercase;
    if (settings.useLowercase !== undefined) document.getElementById('use-lowercase').checked = settings.useLowercase;
    if (settings.useDigits !== undefined) document.getElementById('use-digits').checked = settings.useDigits;
    if (settings.useSpecial !== undefined) document.getElementById('use-special').checked = settings.useSpecial;
    if (settings.excludeAmbiguous !== undefined) document.getElementById('exclude-ambiguous').checked = settings.excludeAmbiguous;
    passwordLengthValue.textContent = passwordLengthSlider.value;
  }
  
  if (result.passphraseSettings) {
    const settings = result.passphraseSettings;
    if (settings.wordCount) wordCountSlider.value = settings.wordCount;
    if (settings.separator) document.getElementById('separator').value = settings.separator;
    if (settings.capitalize !== undefined) document.getElementById('capitalize').checked = settings.capitalize;
    if (settings.includeNumber !== undefined) document.getElementById('include-number').checked = settings.includeNumber;
    wordCountValue.textContent = wordCountSlider.value;
  }
  
  if (result.pinSettings) {
    const settings = result.pinSettings;
    if (settings.length) document.getElementById('pin-length').value = settings.length;
    if (settings.excludeRepeated !== undefined) document.getElementById('exclude-repeated').checked = settings.excludeRepeated;
  }
});

// Save settings on change
function savePasswordSettings() {
  const settings = {
    length: parseInt(passwordLengthSlider.value),
    useUppercase: document.getElementById('use-uppercase').checked,
    useLowercase: document.getElementById('use-lowercase').checked,
    useDigits: document.getElementById('use-digits').checked,
    useSpecial: document.getElementById('use-special').checked,
    excludeAmbiguous: document.getElementById('exclude-ambiguous').checked
  };
  chrome.storage.local.set({ passwordSettings: settings });
}

function savePassphraseSettings() {
  const settings = {
    wordCount: parseInt(wordCountSlider.value),
    separator: document.getElementById('separator').value,
    capitalize: document.getElementById('capitalize').checked,
    includeNumber: document.getElementById('include-number').checked
  };
  chrome.storage.local.set({ passphraseSettings: settings });
}

function savePinSettings() {
  const settings = {
    length: parseInt(document.getElementById('pin-length').value),
    excludeRepeated: document.getElementById('exclude-repeated').checked
  };
  chrome.storage.local.set({ pinSettings: settings });
}

// Add change listeners
document.querySelectorAll('#password-tab input').forEach(input => {
  input.addEventListener('change', savePasswordSettings);
});

document.querySelectorAll('#passphrase-tab input').forEach(input => {
  input.addEventListener('change', savePassphraseSettings);
});

document.querySelectorAll('#pin-tab input, #pin-tab select').forEach(input => {
  input.addEventListener('change', savePinSettings);
});
