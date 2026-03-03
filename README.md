# 🔐 Pswdgen - Chrome Extension

<div align="center">

![Pswdgen Logo](icons/icon-128.png)

**Secure Password Generator for Chrome**

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue?style=for-the-badge&logo=google-chrome)](https://pswdgen.com)
[![Website](https://img.shields.io/badge/Website-pswdgen.com-4a9eff?style=for-the-badge)](https://pswdgen.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![GitHub](https://img.shields.io/github/stars/offspringav/pswdgen-chrome-extension?style=for-the-badge)](https://github.com/offspringav/pswdgen-chrome-extension)

Generate cryptographically secure passwords instantly with the power of [pswdgen.com](https://pswdgen.com) directly in your browser.

[Install](#installation) • [Features](#features) • [Usage](#usage) • [Website](https://pswdgen.com)

</div>

---

## ✨ Features

- 🔐 **Multiple Generation Types**
  - Passwords: Customizable length (8-64 chars) with full character control
  - Passphrases: Memorable word-based passwords using EFF wordlist
  - PINs: Secure numeric codes (4, 6, or 8 digits)

- ⚡ **Quick Access**
  - Popup: Click icon or press `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
  - Context Menu: Right-click any input field
  - Keyboard Shortcut: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)

- 🎯 **Smart Features**
  - Auto-insert into active field or copy to clipboard
  - Remembers your preferred settings
  - History of last 50 generated passwords (stored locally)
  - Exclude ambiguous characters option

- 🔒 **Privacy & Security**
  - 100% offline - no internet connection required
  - No data collection or tracking
  - Uses Web Crypto API for cryptographically secure random generation
  - All data stored locally in your browser

- 🔒 **Privacy & Security**
  - 100% offline - no internet connection required
  - No data collection or tracking
  - Uses Web Crypto API for cryptographically secure random generation
  - All data stored locally in your browser

## 📸 Screenshots

<div align="center">

| Password Generator | Passphrase Generator | PIN Generator |
|:------------------:|:--------------------:|:-------------:|
| ![Password](https://via.placeholder.com/300x400/4a9eff/ffffff?text=Password+Tab) | ![Passphrase](https://via.placeholder.com/300x400/4a9eff/ffffff?text=Passphrase+Tab) | ![PIN](https://via.placeholder.com/300x400/4a9eff/ffffff?text=PIN+Tab) |

</div>

## 🚀 Installation

### Option 1: Install from Source (Recommended)

1. **Clone this repository**
   ```bash
   git clone https://github.com/щааыз�offspringav/pswdgen-chrome-extension.git
   cd pswdgen-chrome-extension
   ```

2. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)

3. **Load the extension**
   - Click "Load unpacked"
   - Select the cloned folder
   - Done! 🎉

### Option 2: Download ZIP

1. [Download the latest release](https://github.com/щааыз�offspringav/pswdgen-chrome-extension/releases)
2. Extract the ZIP file
3. Follow steps 2-3 from Option 1

## 💡 Usage

### Quick Start

1. **Click the extension icon** or press `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. **Choose your generation type**: Password, Passphrase, or PIN
3. **Customize settings** to your needs
4. **Click "Generate"**
5. **Click "Insert"** to auto-fill or **"Copy"** to clipboard

### Context Menu

Right-click on any input field and select:
- "Generate Password"
- "Generate Passphrase"  
- "Generate PIN"

The password will be automatically inserted!

### Keyboard Shortcut

Focus any input field and press `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`) to instantly generate and insert a password.

## ⚙️ Settings

All settings are automatically saved:

### Password
- **Length**: 8-64 characters
- **Character types**: Uppercase, Lowercase, Digits, Special
- **Exclude ambiguous**: Remove confusing characters (0, O, l, 1, I)

### Passphrase
- **Word count**: 3-8 words
- **Separator**: Custom separator between words
- **Capitalize**: Capitalize first letter of each word
- **Include number**: Add random number at the end

### PIN
- **Length**: 4, 6, or 8 digits
- **Exclude repeated**: Prevent consecutive repeated digits

## 🌐 Related Projects

This extension is based on **[pswdgen.com](https://pswdgen.com)** - a full-featured web application with additional features:

- 🔍 **Breach Checking** - Check if passwords have been compromised (HIBP integration)
- 📊 **Password Strength Analysis** - Visual strength indicator
- 📦 **Batch Generation** - Generate multiple passwords at once
- 🔐 **Encrypted Secret Sharing** - Share sensitive information securely
- 📱 **Mobile Optimized** - Works great on all devices
- 🌙 **Dark Mode** - Easy on the eyes

**Visit [pswdgen.com](https://pswdgen.com) for the full experience!**

## 🛠️ Development

### Project Structure

```
chrome-extension/
├── manifest.json          # Extension configuration
├── popup.html            # Popup UI
├── popup.css             # Popup styles
├── popup.js              # Popup logic
├── background.js         # Background service worker
├── content.js            # Content script
├── core/                 # Core generation logic
│   ├── crypto.js
│   ├── password-generator.js
│   ├── passphrase-generator.js
│   └── pin-generator.js
├── icons/                # Extension icons
└── wordlists/            # EFF wordlist
```

### Making Changes

1. Edit the files
2. Go to `chrome://extensions/`
3. Click the reload icon on the extension card
4. Test your changes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [pswdgen.com](https://pswdgen.com)
- **Web App**: [pswdgen.com](https://pswdgen.com)
- **FAQ**: [pswdgen.com/faq](https://pswdgen.com/faq)
- **Privacy Policy**: [pswdgen.com/privacy](https://pswdgen.com/privacy)
- **Security Guide**: [pswdgen.com/security](https://pswdgen.com/security)

## 💬 Support

- Visit our [FAQ page](https://pswdgen.com/faq)
- Open an [issue](https://github.com/щааыз�offspringav/pswdgen-chrome-extension/issues)
- Check out the [website](https://pswdgen.com)

## ⭐ Show Your Support

If you find this extension useful, please:
- ⭐ Star this repository
- 🐦 Share on social media
- 📝 Write a review
- 🌐 Visit [pswdgen.com](https://pswdgen.com)

---

<div align="center">

**Made with ❤️ by the Pswdgen Team**

[Website](https://pswdgen.com) • [GitHub](https://github.com/щааыз�offspringav) • [Report Bug](https://github.com/щааыз�offspringav/pswdgen-chrome-extension/issues)

</div>
