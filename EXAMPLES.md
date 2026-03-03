# 💡 Usage Examples

## Basic Usage

### Example 1: Generate password for new account
```
Scenario: Signing up on a new website

1. Fill in username/email
2. Click on password field
3. Press Ctrl+Shift+P (open popup)
4. Adjust settings if needed:
   - Length: 16
   - All character types: ✓
5. Click "Generate"
6. Click "Insert"
7. Password appears in field
8. Continue with signup
```

### Example 2: Quick password with context menu
```
Scenario: Need password fast

1. Right-click on password field
2. Select "Generate Password"
3. Password instantly inserted
4. Done!
```

### Example 3: Generate memorable passphrase
```
Scenario: Password you need to remember

1. Open popup (Ctrl+Shift+P)
2. Switch to "Passphrase" tab
3. Settings:
   - Words: 4
   - Separator: -
   - Capitalize: ✓
   - Include number: ✓
4. Click "Generate"
5. Result: "Correct-Horse-Battery-Staple7234"
6. Click "Copy" or "Insert"
```

## Advanced Usage

### Example 4: Custom password requirements
```
Scenario: Site requires exactly 12 chars, no special symbols

1. Open popup
2. Password tab
3. Settings:
   - Length: 12
   - Uppercase: ✓
   - Lowercase: ✓
   - Digits: ✓
   - Special: ✗ (unchecked)
4. Generate
5. Result: "aB3dE5gH9jK2"
```

### Example 5: PIN for phone unlock
```
Scenario: Need 6-digit PIN

1. Open popup
2. PIN tab
3. Settings:
   - Length: 6
   - Exclude repeated: ✓
4. Generate
5. Result: "482917"
6. Copy and use
```

### Example 6: Batch password generation
```
Scenario: Need multiple passwords for testing

1. Open popup
2. Generate password
3. Copy (Ctrl+C)
4. Paste in notepad
5. Generate again
6. Copy
7. Paste
8. Repeat as needed

Note: All generated passwords saved in history
```

## Real-World Scenarios

### Scenario 1: Gmail signup
```
1. Go to gmail.com/signup
2. Fill in name, username
3. Click password field
4. Right-click → "Generate Password"
5. Password inserted: "xK9#mP2@vL5$nR8"
6. Click "Next"
7. Save password in password manager
```

### Scenario 2: GitHub account
```
1. Go to github.com/signup
2. Fill in email
3. Click password field
4. Press Ctrl+Shift+G (quick generate)
5. Password inserted
6. Continue signup
```

### Scenario 3: WiFi password
```
1. Setting up new router
2. Need strong WiFi password
3. Open popup
4. Passphrase tab
5. Settings:
   - Words: 5
   - Separator: (empty)
   - Capitalize: ✓
   - Number: ✓
6. Generate: "CorrectHorseBatteryStapleMonkey1234"
7. Copy
8. Enter in router settings
9. Write down on paper for guests
```

### Scenario 4: Database password
```
1. Setting up MySQL
2. Need secure root password
3. Open popup
4. Password tab
5. Settings:
   - Length: 32
   - All types: ✓
   - Exclude ambiguous: ✓
6. Generate
7. Copy
8. Paste in config file
9. Store in secrets manager
```

### Scenario 5: Temporary test account
```
1. Testing signup flow
2. Need quick password
3. Right-click on field
4. "Generate Password"
5. Done in 2 seconds
6. Password in history if needed later
```

## Keyboard Shortcuts Workflow

### Power User Flow
```
1. Ctrl+T (new tab)
2. Type "gmail.com/signup"
3. Tab through fields
4. On password field: Ctrl+Shift+G
5. Password inserted
6. Tab to next field
7. Continue

Total time: ~5 seconds
```

## Settings Presets

### Preset 1: Maximum Security
```
Password:
- Length: 64
- All types: ✓
- Exclude ambiguous: ✗

Use for: Master passwords, encryption keys
```

### Preset 2: Standard Account
```
Password:
- Length: 16
- All types: ✓
- Exclude ambiguous: ✓

Use for: Most websites, apps
```

### Preset 3: Easy to Type
```
Passphrase:
- Words: 4
- Separator: -
- Capitalize: ✓
- Number: ✓

Use for: Passwords you type often
```

### Preset 4: Mobile-Friendly
```
PIN:
- Length: 6
- Exclude repeated: ✓

Use for: Phone unlock, app PINs
```

## Integration Examples

### With Password Manager (1Password, LastPass, etc.)

```
Workflow:
1. Generate password with extension
2. Click "Copy"
3. Open password manager
4. Create new entry
5. Paste password
6. Save

Alternative:
1. Generate with "Insert"
2. Password manager auto-detects
3. Offers to save
4. Accept
```

### With Form Autofill

```
Workflow:
1. Browser suggests autofill
2. Ignore (need new password)
3. Right-click → "Generate Password"
4. New password inserted
5. Submit form
6. Browser offers to update saved password
7. Accept
```

### With Developer Tools

```
Scenario: Testing password validation

1. Open DevTools (F12)
2. Console tab
3. Generate password with extension
4. Copy
5. In console: document.querySelector('#password').value = 'paste'
6. Test validation
```

## Tips & Tricks

### Tip 1: Quick regenerate
```
If you don't like generated password:
1. Click "Generate" again
2. New password instantly
3. No need to change settings
```

### Tip 2: View history
```
To see previously generated passwords:
1. Open DevTools (F12)
2. Application → Storage → Local Storage
3. Find extension ID
4. Look for "history" key
5. See last 50 passwords
```

### Tip 3: Clear history
```
To clear password history:
1. chrome://extensions/
2. Find Pswdgen
3. Click "Details"
4. Scroll to "Site data"
5. Click "Remove"
6. Or: Clear all extension data
```

### Tip 4: Keyboard-only workflow
```
1. Ctrl+Shift+P (open popup)
2. Tab (navigate to settings)
3. Space (toggle checkboxes)
4. Tab to "Generate"
5. Enter (generate)
6. Tab to "Insert"
7. Enter (insert)
8. Esc (close popup)
```

### Tip 5: Multiple passwords
```
Need several passwords:
1. Open popup
2. Generate
3. Ctrl+C (copy)
4. Generate again
5. Ctrl+C
6. Repeat
7. All saved in history
```

## Common Mistakes

### ❌ Mistake 1: Field not focused
```
Problem: Click "Insert" but nothing happens
Solution: Click on the input field first
```

### ❌ Mistake 2: Wrong field type
```
Problem: Context menu doesn't show
Solution: Only works on input/textarea, not divs
```

### ❌ Mistake 3: No character types selected
```
Problem: Can't generate password
Solution: Select at least one character type
```

### ❌ Mistake 4: Forgot to save password
```
Problem: Generated password but lost it
Solution: Check history in DevTools or regenerate
```

## Accessibility

### For Screen Readers
```
1. Extension fully keyboard accessible
2. All buttons have labels
3. Tab navigation works
4. ARIA labels on controls
```

### For Motor Impairments
```
1. Large click targets
2. Keyboard shortcuts available
3. Context menu for easy access
4. No double-click required
```

### For Visual Impairments
```
1. High contrast mode compatible
2. Large text in popup
3. Clear visual feedback
4. Monospace font for passwords
```

## Performance Tips

### Tip 1: First passphrase is slow
```
First passphrase generation loads wordlist (~100ms)
Subsequent generations are instant
This is normal and expected
```

### Tip 2: Keep popup open
```
If generating multiple passwords:
Keep popup open instead of reopening
Faster workflow
```

### Tip 3: Use keyboard shortcuts
```
Keyboard shortcuts are faster than clicking
Learn: Ctrl+Shift+P and Ctrl+Shift+G
```

## Security Best Practices

### ✅ Do:
- Generate unique password for each site
- Use maximum length when possible
- Enable all character types
- Save in password manager
- Use passphrases for master passwords

### ❌ Don't:
- Reuse generated passwords
- Share passwords via insecure channels
- Write passwords in plain text files
- Use same settings for all passwords
- Ignore password manager prompts

## Troubleshooting Examples

### Issue: Password not inserting
```
Debug steps:
1. Check field is focused (click it)
2. Try on test.html
3. If works there, site might block it
4. Use Copy instead
5. Check console for errors
```

### Issue: Context menu missing
```
Debug steps:
1. Reload extension
2. Reload page
3. Check you're right-clicking input field
4. Check extension is enabled
5. Try different field
```

### Issue: Settings not saving
```
Debug steps:
1. Check Chrome Storage permissions
2. Clear extension data
3. Reload extension
4. Try again
5. Check for errors in console
```
