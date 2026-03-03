#!/usr/bin/env python3
"""Generate Chrome Extension icons from SVG template"""

import os
from pathlib import Path

# Try to import cairosvg, if not available, provide instructions
try:
    import cairosvg
except ImportError:
    print("❌ cairosvg not installed")
    print("\nInstall with:")
    print("  pip install cairosvg")
    print("  or")
    print("  pip3 install cairosvg")
    exit(1)

SIZES = [16, 32, 48, 128]
SCRIPT_DIR = Path(__file__).parent
SVG_FILE = SCRIPT_DIR / "icon-template.svg"
ICONS_DIR = SCRIPT_DIR / "icons"

def generate_icon(size):
    """Generate PNG icon of specified size from SVG"""
    output_file = ICONS_DIR / f"icon-{size}.png"
    
    try:
        cairosvg.svg2png(
            url=str(SVG_FILE),
            write_to=str(output_file),
            output_width=size,
            output_height=size
        )
        print(f"✓ Generated icon-{size}.png")
        return True
    except Exception as e:
        print(f"✗ Failed to generate icon-{size}.png: {e}")
        return False

def main():
    print("🎨 Generating Chrome Extension icons...\n")
    
    # Check if SVG exists
    if not SVG_FILE.exists():
        print(f"✗ SVG template not found: {SVG_FILE}")
        exit(1)
    
    # Create icons directory
    ICONS_DIR.mkdir(exist_ok=True)
    
    # Generate all sizes
    success_count = 0
    for size in SIZES:
        if generate_icon(size):
            success_count += 1
    
    print(f"\n✅ Generated {success_count}/{len(SIZES)} icons successfully!")
    
    if success_count == len(SIZES):
        print("\nNext steps:")
        print("1. Check chrome-extension/icons/ folder")
        print("2. Reload extension in chrome://extensions/")
        print("3. Icons should now be visible in toolbar")

if __name__ == "__main__":
    main()
