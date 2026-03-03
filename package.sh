#!/bin/bash

# Package Chrome Extension for distribution

echo "📦 Packaging Pswdgen Chrome Extension..."

# Remove old package if exists
rm -f pswdgen-extension.zip

# Create ZIP excluding unnecessary files
zip -r pswdgen-extension.zip . \
  -x "*.git*" \
  -x "*.DS_Store" \
  -x "README.md" \
  -x "package.sh" \
  -x "*.zip"

echo "✅ Package created: pswdgen-extension.zip"
echo ""
echo "Next steps:"
echo "1. Go to https://chrome.google.com/webstore/devconsole/"
echo "2. Click 'New Item'"
echo "3. Upload pswdgen-extension.zip"
echo "4. Fill in store listing details"
echo "5. Submit for review"
