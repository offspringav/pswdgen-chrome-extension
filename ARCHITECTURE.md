# 🏗️ Architecture Overview

## Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Chrome Browser                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐      ┌──────────────┐                   │
│  │   Toolbar    │      │  Context     │                   │
│  │   Icon 🔐    │      │  Menu        │                   │
│  └──────┬───────┘      └──────┬───────┘                   │
│         │                     │                            │
│         │ Click               │ Right-click                │
│         │ Ctrl+Shift+P        │ on input                   │
│         ▼                     ▼                            │
│  ┌─────────────────────────────────────┐                  │
│  │         Popup Window                │                  │
│  │  ┌─────────────────────────────┐   │                  │
│  │  │  popup.html + popup.css     │   │                  │
│  │  │  ┌───┬───────┬─────┬─────┐ │   │                  │
│  │  │  │ 🔑│Phrase │ PIN │     │ │   │                  │
│  │  │  └───┴───────┴─────┴─────┘ │   │                  │
│  │  │  [Settings]                 │   │                  │
│  │  │  [Generate] [Copy] [Insert] │   │                  │
│  │  └─────────────┬───────────────┘   │                  │
│  │                │                    │                  │
│  │                │ popup.js           │                  │
│  │                ▼                    │                  │
│  │  ┌─────────────────────────────┐   │                  │
│  │  │    Core Generators          │   │                  │
│  │  │  ┌─────────────────────┐   │   │                  │
│  │  │  │ crypto.js           │   │   │                  │
│  │  │  │ - getSecureRandomInt│   │   │                  │
│  │  │  │ - sha1Hash          │   │   │                  │
│  │  │  └─────────────────────┘   │   │                  │
│  │  │  ┌─────────────────────┐   │   │                  │
│  │  │  │ password-generator  │   │   │                  │
│  │  │  │ passphrase-generator│   │   │                  │
│  │  │  │ pin-generator       │   │   │                  │
│  │  │  └─────────────────────┘   │   │                  │
│  │  └─────────────────────────────┘   │                  │
│  └─────────────────────────────────────┘                  │
│                                                             │
│  ┌─────────────────────────────────────┐                  │
│  │    Background Service Worker        │                  │
│  │         (background.js)             │                  │
│  │                                     │                  │
│  │  • Context menu registration        │                  │
│  │  • Keyboard shortcuts handler       │                  │
│  │  • Quick generation (no popup)      │                  │
│  │  • Message routing                  │                  │
│  └──────────────┬──────────────────────┘                  │
│                 │                                          │
│                 │ chrome.tabs.sendMessage                  │
│                 ▼                                          │
│  ┌─────────────────────────────────────┐                  │
│  │      Web Page (any site)            │                  │
│  │  ┌─────────────────────────────┐   │                  │
│  │  │    Content Script           │   │                  │
│  │  │     (content.js)            │   │                  │
│  │  │                             │   │                  │
│  │  │  • Listen for messages      │   │                  │
│  │  │  • Insert into active field │   │                  │
│  │  │  • Highlight fields         │   │                  │
│  │  └─────────────┬───────────────┘   │                  │
│  │                │                    │                  │
│  │                ▼                    │                  │
│  │  ┌─────────────────────────────┐   │                  │
│  │  │   <input type="password">   │   │                  │
│  │  │   <input type="text">       │   │                  │
│  │  │   <textarea>                │   │                  │
│  │  └─────────────────────────────┘   │                  │
│  └─────────────────────────────────────┘                  │
│                                                             │
│  ┌─────────────────────────────────────┐                  │
│  │      Chrome Storage API             │                  │
│  │                                     │                  │
│  │  • passwordSettings                 │                  │
│  │  • passphraseSettings               │                  │
│  │  • pinSettings                      │                  │
│  │  • history (last 50)                │                  │
│  └─────────────────────────────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. User clicks extension icon
```
User → Toolbar Icon → popup.html loads → popup.js initializes
                                       → Load settings from Chrome Storage
                                       → Restore UI state
```

### 2. User generates password in popup
```
User clicks "Generate"
  → popup.js reads config from UI
  → Calls PasswordGenerator.generate(config)
    → CryptoService.getSecureRandomInt()
      → Web Crypto API (crypto.getRandomValues)
  → Returns password
  → Display in result field
  → Save to Chrome Storage (history)
```

### 3. User clicks "Insert"
```
User clicks "Insert"
  → popup.js gets active tab
  → chrome.tabs.sendMessage(tabId, {action: 'insertPassword', password})
  → content.js receives message
  → Finds document.activeElement
  → Inserts password into field
  → Triggers input/change events (for React/Vue)
  → Sends response back
  → popup.js shows notification
  → Closes popup
```

### 4. User right-clicks on field
```
User right-clicks input field
  → Chrome shows context menu
  → User selects "Generate Password"
  → background.js receives event
  → Loads settings from Chrome Storage
  → Generates password (simplified version)
  → chrome.tabs.sendMessage(tabId, {action: 'insertPassword', password})
  → content.js inserts into field
  → Saves to history
```

### 5. User presses Ctrl+Shift+G
```
User presses Ctrl+Shift+G
  → Chrome triggers command
  → background.js receives command event
  → Gets active tab
  → Generates password
  → Sends to content.js
  → Inserts into active field
```

## File Dependencies

```
popup.html
  ├── popup.css (styles)
  ├── core/crypto.js (must load first)
  ├── core/password-generator.js (depends on crypto.js)
  ├── core/passphrase-generator.js (depends on crypto.js)
  ├── core/pin-generator.js (depends on crypto.js)
  └── popup.js (depends on all core files)

background.js
  └── (standalone, no dependencies)

content.js
  └── (standalone, injected into pages)

manifest.json
  ├── Defines all components
  ├── Permissions
  ├── Commands (shortcuts)
  └── Web accessible resources (wordlist)
```

## Communication Patterns

### Popup ↔ Storage
```javascript
// Save settings
chrome.storage.local.set({ passwordSettings: config });

// Load settings
chrome.storage.local.get(['passwordSettings'], (result) => {
  const settings = result.passwordSettings;
});
```

### Popup ↔ Content Script
```javascript
// Popup sends message
chrome.tabs.sendMessage(tabId, {
  action: 'insertPassword',
  password: 'generated-password'
}, (response) => {
  console.log('Inserted:', response.success);
});

// Content script receives
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'insertPassword') {
    insertIntoActiveElement(request.password);
    sendResponse({ success: true });
  }
});
```

### Background ↔ Content Script
```javascript
// Same pattern as Popup ↔ Content Script
// Background can also send messages to content scripts
```

## Security Model

### Permissions
```json
{
  "permissions": [
    "activeTab",      // Access to current tab only
    "storage",        // Local storage for settings
    "contextMenus",   // Right-click menu
    "clipboardWrite"  // Copy to clipboard
  ],
  "host_permissions": [
    "https://api.pwnedpasswords.com/*"  // Future: breach check
  ]
}
```

### Content Security Policy
```json
{
  "content_security_policy": {
    "extension_pages": "script-src 'self'; object-src 'self'"
  }
}
```

### Data Storage
- All data stored locally (Chrome Storage API)
- No external API calls (except future HIBP)
- No analytics or tracking
- History limited to 50 items
- Settings per-user, not synced

## Performance Considerations

### Lazy Loading
- Wordlist loaded only when needed (first passphrase generation)
- Content script injected into all pages but lightweight
- Background service worker sleeps when not in use

### Memory Usage
- Popup: ~5MB (includes React-like UI)
- Background: ~2MB (minimal logic)
- Content script: ~1MB per tab
- Wordlist: 106KB (cached after first load)

### Generation Speed
- Password: <1ms (instant)
- Passphrase: ~10ms first time (wordlist load), <1ms after
- PIN: <1ms (instant)

## Extension Lifecycle

### Installation
```
1. User installs extension
2. chrome.runtime.onInstalled fires
3. background.js creates context menu items
4. Extension ready
```

### Daily Usage
```
1. User clicks icon → Popup opens
2. User generates → Stores in history
3. User closes popup → Settings saved
4. Background worker sleeps
```

### Updates
```
1. Chrome auto-updates extension
2. chrome.runtime.onInstalled fires (reason: 'update')
3. Can run migration logic if needed
4. Users see new version
```

## Testing Strategy

### Unit Tests (Future)
- Test each generator independently
- Test crypto service
- Mock Chrome APIs

### Integration Tests
- Test popup UI interactions
- Test message passing
- Test storage operations

### Manual Testing
- Use test.html for controlled environment
- Test on real websites
- Test all shortcuts and context menus
- Test on different input types

## Future Enhancements

### Planned Features
- [ ] Breach check (HIBP API integration)
- [ ] Password strength indicator
- [ ] Export/import settings
- [ ] Sync across devices (Chrome Sync API)
- [ ] Custom wordlists
- [ ] Batch generation
- [ ] Password history search

### Technical Improvements
- [ ] Add TypeScript
- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Optimize bundle size
- [ ] Add telemetry (opt-in)
- [ ] Add error reporting (Sentry)

## Browser Compatibility

### Chrome
✅ Fully supported (Manifest V3)

### Edge
✅ Should work (Chromium-based, Manifest V3)

### Firefox
⚠️ Needs port (Manifest V2 or V3 with modifications)

### Safari
⚠️ Needs significant changes (different extension API)

### Opera
✅ Should work (Chromium-based)
