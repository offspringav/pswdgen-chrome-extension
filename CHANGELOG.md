# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-03

### Added
- Initial release
- Password generator (8-64 characters)
- Passphrase generator (3-8 words, EFF wordlist)
- PIN generator (4, 6, 8 digits)
- Copy to clipboard functionality
- Auto-insert into active field
- Context menu integration
- Keyboard shortcuts (Ctrl+Shift+P, Ctrl+Shift+G)
- Settings persistence
- History tracking (last 50 passwords)
- Dark theme UI
- 100% offline operation
- Based on [pswdgen.com](https://pswdgen.com)

### Security
- Uses Web Crypto API for cryptographically secure random generation
- No data collection or tracking
- All data stored locally

## [Unreleased]

### Planned Features
- Breach check integration (HIBP API)
- Password strength indicator
- Export/import settings
- Sync settings across devices
- Light/dark theme toggle
- Custom wordlists
- Password history search
- Batch generation

---

[1.0.0]: https://github.com/offspringav/pswdgen-chrome-extension/releases/tag/v1.0.0
