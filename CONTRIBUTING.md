# Contributing to Pswdgen Chrome Extension

Thank you for your interest in contributing!

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/offspringav/pswdgen-chrome-extension/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Chrome version
   - Extension version
   - Screenshots if applicable

### Suggesting Features

1. Check [Issues](https://github.com/offspringav/pswdgen-chrome-extension/issues) for existing suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Use cases
   - Why it would be useful
   - Mockups/examples if applicable

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**
   - Describe your changes
   - Reference related issues
   - Include screenshots if UI changes

## Development Setup

1. Clone the repository
   ```bash
   git clone https://github.com/offspringav/pswdgen-chrome-extension.git
   cd pswdgen-chrome-extension
   ```

2. Load in Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the cloned folder

3. Make changes and test
   - Edit files
   - Reload extension in `chrome://extensions/`
   - Test functionality

## Code Style

- Use clear, descriptive variable names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing patterns in the codebase

## Testing

Before submitting a PR, please test:

- All three generators (Password, Passphrase, PIN)
- Copy button works
- Insert button works
- Context menu works
- Keyboard shortcuts work
- Settings are saved
- No console errors
- Works on different websites

## Questions?

- Open an [issue](https://github.com/offspringav/pswdgen-chrome-extension/issues)
- Visit [pswdgen.com/faq](https://pswdgen.com/faq)

Thank you for contributing!
