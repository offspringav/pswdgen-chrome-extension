# 📋 Pre-Launch Checklist

## Development ✅

- [x] Manifest V3 configuration
- [x] Popup UI (HTML/CSS/JS)
- [x] Background service worker
- [x] Content script for page interaction
- [x] Core generation logic (Password/Passphrase/PIN)
- [x] Crypto service (Web Crypto API)
- [x] Context menu integration
- [x] Keyboard shortcuts
- [x] Settings persistence (Chrome Storage)
- [x] History tracking (last 50 items)
- [x] Icons (16, 32, 48, 128)
- [x] EFF wordlist for passphrases

## Testing 🧪

- [ ] Install extension in Chrome
- [ ] Test popup opens (icon + Ctrl+Shift+P)
- [ ] Test all 3 generators (Password/Passphrase/PIN)
- [ ] Test Copy button
- [ ] Test Insert button on test.html
- [ ] Test context menu (right-click)
- [ ] Test keyboard shortcut (Ctrl+Shift+G)
- [ ] Test settings persistence
- [ ] Test on different websites
- [ ] Test on password fields
- [ ] Test on text fields
- [ ] Test on textareas
- [ ] Test on contentEditable elements
- [ ] Check console for errors
- [ ] Test offline functionality

## Pre-Publishing 📦

- [ ] Create screenshots (5 required)
  - [ ] Popup - Password tab (380x600)
  - [ ] Popup - Passphrase tab (380x600)
  - [ ] Popup - PIN tab (380x600)
  - [ ] Context menu demo (1280x800)
  - [ ] Settings demo (1280x800)

- [ ] Create promotional images
  - [ ] Small tile (440x280)
  - [ ] Large tile (920x680)
  - [ ] Marquee (1400x560)

- [ ] Prepare store listing
  - [ ] Review STORE_LISTING.md
  - [ ] Prepare description
  - [ ] Choose category (Productivity)
  - [ ] Add keywords

- [ ] Legal
  - [ ] Privacy policy URL (https://pswdgen.com/privacy)
  - [ ] Support URL (https://pswdgen.com/faq)

## Publishing 🚀

- [ ] Create developer account ($5 one-time fee)
- [ ] Package extension: `bash package.sh`
- [ ] Upload to Chrome Web Store
- [ ] Fill in store listing
- [ ] Upload screenshots
- [ ] Upload promotional images
- [ ] Set pricing (Free)
- [ ] Submit for review
- [ ] Wait 1-2 days for approval

## Post-Launch 📈

- [ ] Monitor reviews
- [ ] Track installation stats
- [ ] Collect user feedback
- [ ] Plan updates
- [ ] Add link to pswdgen.com
- [ ] Announce on social media

## Future Enhancements 💡

- [ ] Breach check integration (HIBP API)
- [ ] Password strength indicator
- [ ] Export/import settings
- [ ] Sync settings across devices
- [ ] Dark/light theme toggle
- [ ] Custom wordlists
- [ ] Password history search
- [ ] Batch generation
- [ ] Firefox port
- [ ] Edge port

## Known Limitations ⚠️

- Passphrase generator uses simplified wordlist in background worker
- Insert may not work on some complex web apps (React/Vue with custom inputs)
- Context menu only shows on editable elements
- History limited to 50 items
- No cloud sync (by design - privacy first)

## Support Channels 💬

- Website: https://pswdgen.com
- FAQ: https://pswdgen.com/faq
- Email: (add support email)
- GitHub: (add repo link)
