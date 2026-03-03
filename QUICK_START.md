# 🚀 Quick Start Guide

## Installation (5 минут)

1. **Открой Chrome Extensions**
   - Перейди на `chrome://extensions/`
   - Или: Меню → Расширения → Управление расширениями

2. **Включи Developer Mode**
   - Переключатель в правом верхнем углу

3. **Загрузи расширение**
   - Нажми "Загрузить распакованное расширение"
   - Выбери папку `chrome-extension`
   - Готово! 🎉

4. **Закрепи иконку** (опционально)
   - Нажми на иконку пазла в toolbar
   - Найди "Pswdgen"
   - Нажми на булавку

## Тестирование

### Способ 1: Тестовая страница
```bash
# Открой test.html в Chrome
chrome-extension/test.html
```

### Способ 2: Любой сайт
1. Открой любой сайт с формой (например, gmail.com)
2. Кликни правой кнопкой на поле пароля
3. Выбери "Generate Password"

### Способ 3: Popup
1. Нажми на иконку расширения (или Ctrl+Shift+P)
2. Настрой параметры
3. Нажми "Generate"
4. Нажми "Copy" или "Insert"

## Горячие клавиши

- `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) - Открыть popup
- `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`) - Сгенерировать и вставить

## Проверка работы

✅ **Popup открывается**
- Иконка кликабельна
- Popup показывает 3 вкладки
- Слайдеры работают

✅ **Генерация работает**
- Password генерируется
- Passphrase генерируется (может быть медленнее первый раз)
- PIN генерируется

✅ **Copy работает**
- Нажми Copy
- Вставь в любое поле (Ctrl+V)

✅ **Insert работает**
- Открой test.html
- Кликни на поле
- Открой popup
- Сгенерируй пароль
- Нажми Insert
- Пароль должен появиться в поле

✅ **Context Menu работает**
- Правый клик на поле
- Видны 3 опции генерации
- Клик вставляет пароль

✅ **Settings сохраняются**
- Измени настройки
- Закрой popup
- Открой снова
- Настройки должны остаться

## Troubleshooting

### Popup не открывается
- Проверь что расширение включено в `chrome://extensions/`
- Перезагрузи расширение (кнопка reload)

### Insert не работает
- Убедись что поле в фокусе
- Попробуй на test.html
- Если не работает - используй Copy

### Passphrase не генерируется
- Проверь консоль (F12)
- Убедись что wordlist скопирован
- Проверь `chrome-extension/wordlists/eff-long-wordlist.txt`

### Context menu не появляется
- Перезагрузи расширение
- Перезагрузи страницу
- Проверь что кликаешь на input/textarea

## Следующие шаги

1. ✅ Протестируй все функции
2. 📸 Сделай скриншоты для Store
3. 📦 Упакуй: `bash package.sh`
4. 🚀 Опубликуй в Chrome Web Store

## Полезные ссылки

- Chrome Web Store: https://chrome.google.com/webstore/devconsole/
- Manifest V3 Docs: https://developer.chrome.com/docs/extensions/mv3/
- Publishing Guide: https://developer.chrome.com/docs/webstore/publish/
