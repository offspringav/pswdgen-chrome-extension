// Content Script - вставка паролей в поля на странице

// Слушаем сообщения от popup и background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'insertPassword') {
    const inserted = insertIntoActiveElement(request.password);
    sendResponse({ success: inserted });
  }
  return true;
});

// Вставка в активный элемент
function insertIntoActiveElement(text) {
  const activeElement = document.activeElement;
  
  if (!activeElement) {
    return false;
  }

  // Проверяем тип элемента
  const tagName = activeElement.tagName.toLowerCase();
  const isInput = tagName === 'input' && 
    ['text', 'password', 'email', 'search', 'tel', 'url'].includes(activeElement.type);
  const isTextarea = tagName === 'textarea';
  const isContentEditable = activeElement.isContentEditable;

  if (isInput || isTextarea) {
    // Для обычных input и textarea
    const start = activeElement.selectionStart;
    const end = activeElement.selectionEnd;
    const value = activeElement.value;

    activeElement.value = value.substring(0, start) + text + value.substring(end);
    activeElement.selectionStart = activeElement.selectionEnd = start + text.length;

    // Trigger events для React и других фреймворков
    activeElement.dispatchEvent(new Event('input', { bubbles: true }));
    activeElement.dispatchEvent(new Event('change', { bubbles: true }));

    return true;
  } else if (isContentEditable) {
    // Для contentEditable элементов
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(text));
      range.collapse(false);
      
      activeElement.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }
  }

  return false;
}

// Подсветка полей при наведении (опционально)
let highlightedElement = null;

document.addEventListener('mouseover', (e) => {
  const element = e.target;
  const tagName = element.tagName.toLowerCase();
  
  const isPasswordField = tagName === 'input' && 
    ['password', 'text', 'email'].includes(element.type);
  
  if (isPasswordField && element !== highlightedElement) {
    highlightedElement = element;
    element.dataset.pswdgenHighlight = 'true';
  }
});

document.addEventListener('mouseout', (e) => {
  const element = e.target;
  if (element === highlightedElement) {
    delete element.dataset.pswdgenHighlight;
    highlightedElement = null;
  }
});

// Добавляем стили для подсветки
const style = document.createElement('style');
style.textContent = `
  [data-pswdgen-highlight="true"] {
    outline: 2px solid #4a9eff !important;
    outline-offset: 2px !important;
  }
`;
document.head.appendChild(style);
