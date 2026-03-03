#!/bin/bash

# Скрипт для инициализации Git репозитория

echo "🚀 Initializing Git repository for Pswdgen Chrome Extension..."
echo ""

# Проверка что мы в правильной директории
if [ ! -f "manifest.json" ]; then
    echo "❌ Error: manifest.json not found. Run this script from chrome-extension directory."
    exit 1
fi

# Запрос GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

echo ""
echo "📝 Updating documentation with your GitHub username..."

# Замена YOUR_USERNAME на реальный username
find . -type f -name "*.md" -exec sed -i "s/YOUR_USERNAME/$GITHUB_USERNAME/g" {} +

echo "✅ Documentation updated"
echo ""

# Инициализация git
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "ℹ️  Git repository already exists"
fi

echo ""
echo "📋 Adding files..."
git add .

echo ""
echo "💾 Creating initial commit..."
git commit -m "🎉 Initial release: Pswdgen Chrome Extension v1.0.0"

echo ""
echo "🔗 Adding remote origin..."
git remote add origin "https://github.com/$GITHUB_USERNAME/pswdgen-chrome-extension.git" 2>/dev/null || \
git remote set-url origin "https://github.com/$GITHUB_USERNAME/pswdgen-chrome-extension.git"

echo ""
echo "✅ Git repository initialized!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Create repository on GitHub:"
echo "   https://github.com/new"
echo "   Name: pswdgen-chrome-extension"
echo "   Description: 🔐 Secure password generator Chrome extension"
echo "   Public: ✓"
echo ""
echo "2. Push to GitHub:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Create release:"
echo "   https://github.com/$GITHUB_USERNAME/pswdgen-chrome-extension/releases/new"
echo "   Tag: v1.0.0"
echo ""
echo "4. Add topics: chrome-extension, password-generator, security, privacy"
echo ""
echo "5. Add website: https://pswdgen.com"
echo ""
echo "🎉 Done! See GITHUB_SETUP.md for detailed instructions."
