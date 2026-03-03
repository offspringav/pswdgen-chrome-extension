# 🚀 GitHub Setup Instructions

## Шаг 1: Создай репозиторий на GitHub

1. Перейди на [github.com/new](https://github.com/new)
2. Заполни:
   - **Repository name**: `pswdgen-chrome-extension`
   - **Description**: `🔐 Secure password generator Chrome extension - Generate strong passwords instantly`
   - **Public** ✓
   - **Add README**: ✗ (уже есть)
   - **Add .gitignore**: ✗ (уже есть)
   - **Choose a license**: ✗ (уже есть MIT)
3. Нажми **Create repository**

## Шаг 2: Инициализируй Git локально

```bash
cd chrome-extension

# Инициализируй git
git init

# Добавь все файлы
git add .

# Первый коммит
git commit -m "🎉 Initial release: Pswdgen Chrome Extension v1.0.0"

# Добавь remote (замени щааыз�offspringav на свой)
git remote add origin https://github.com/щааыз�offspringav/pswdgen-chrome-extension.git

# Отправь на GitHub
git branch -M main
git push -u origin main
```

## Шаг 3: Настрой репозиторий

### 3.1 Добавь Topics (теги)
На странице репозитория нажми ⚙️ Settings → About → Topics:
```
chrome-extension
password-generator
security
privacy
cryptography
password-manager
chrome
browser-extension
```

### 3.2 Добавь Website
В About → Website:
```
https://pswdgen.com
```

### 3.3 Включи Issues
Settings → Features → ✓ Issues

### 3.4 Включи Discussions (опционально)
Settings → Features → ✓ Discussions

## Шаг 4: Создай Release

1. Перейди в **Releases** → **Create a new release**
2. Заполни:
   - **Tag**: `v1.0.0`
   - **Release title**: `🎉 v1.0.0 - Initial Release`
   - **Description**:
     ```markdown
     ## 🎉 First Release!
     
     Pswdgen Chrome Extension is now available!
     
     ### ✨ Features
     - 🔐 Password generator (8-64 characters)
     - 📝 Passphrase generator (EFF wordlist)
     - 🔢 PIN generator (4/6/8 digits)
     - ⚡ Quick access (Ctrl+Shift+P)
     - 🖱️ Context menu integration
     - 📋 Copy & auto-insert
     - 💾 Settings persistence
     - 🔒 100% offline & private
     
     ### 📦 Installation
     See [README.md](https://github.com/щааыз�offspringav/pswdgen-chrome-extension#installation) for installation instructions.
     
     ### 🌐 Related
     Based on [pswdgen.com](https://pswdgen.com) - full-featured web app with breach checking, strength analysis, and encrypted secret sharing.
     ```
3. Нажми **Publish release**

## Шаг 5: Обнови README с правильными ссылками

Замени `щааыз�offspringav` на свой GitHub username во всех файлах:
- README.md
- CONTRIBUTING.md
- CHANGELOG.md

```bash
# Автоматическая замена (замени YOUR_ACTUAL_USERNAME)
find . -type f -name "*.md" -exec sed -i 's/щааыз�offspringav/YOUR_ACTUAL_USERNAME/g' {} +

# Коммит изменений
git add .
git commit -m "📝 Update GitHub username in documentation"
git push
```

## Шаг 6: Добавь красивые badges

В README.md уже есть badges, но можешь добавить больше:

```markdown
![GitHub stars](https://img.shields.io/github/stars/щааыз�offspringav/pswdgen-chrome-extension?style=social)
![GitHub forks](https://img.shields.io/github/forks/щааыз�offspringav/pswdgen-chrome-extension?style=social)
![GitHub issues](https://img.shields.io/github/issues/щааыз�offspringav/pswdgen-chrome-extension)
![GitHub last commit](https://img.shields.io/github/last-commit/щааыз�offspringav/pswdgen-chrome-extension)
```

## Шаг 7: Добавь на сайт pswdgen.com

Добавь ссылку на GitHub в футер или на странице About:

```html
<a href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension" target="_blank">
  Chrome Extension (GitHub)
</a>
```

## Шаг 8: Продвижение

### На сайте
- Добавь баннер "Install Chrome Extension"
- Добавь в меню навигации
- Создай отдельную страницу /chrome-extension

### В социальных сетях
```
🎉 Новое расширение для Chrome!

Генерируй безопасные пароли прямо в браузере:
✅ Пароли, парольные фразы, PIN
✅ Быстрый доступ (Ctrl+Shift+P)
✅ 100% оффлайн и приватно
✅ Open source

GitHub: https://github.com/щааыз�offspringav/pswdgen-chrome-extension
Сайт: https://pswdgen.com

#security #privacy #opensource #chrome
```

### На Reddit
- r/chrome
- r/chrome_extensions
- r/privacy
- r/opensource

### На Product Hunt (опционально)
Можешь запустить на Product Hunt для большей видимости

## Шаг 9: Мониторинг

### GitHub Insights
Проверяй:
- Stars ⭐
- Forks 🍴
- Issues 🐛
- Pull Requests 🔀
- Traffic 📊

### Google Analytics (опционально)
Добавь GA на pswdgen.com для отслеживания переходов с GitHub

## Готово! 🎉

Теперь у тебя:
- ✅ Публичный репозиторий на GitHub
- ✅ Красивый README с badges
- ✅ Документация (CONTRIBUTING, CHANGELOG)
- ✅ MIT License
- ✅ Release v1.0.0
- ✅ Готово к продвижению

## Следующие шаги

1. Поделись в соцсетях
2. Добавь на сайт pswdgen.com
3. Собирай feedback
4. Планируй новые фичи
5. Принимай Pull Requests от сообщества

Удачи! 🚀
