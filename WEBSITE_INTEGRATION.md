# 🌐 Website Integration Guide

Как добавить ссылку на Chrome Extension на сайт pswdgen.com

## 1. Баннер на главной странице

Добавь в `password-generator/src/components/landing/HeroSection.tsx`:

```tsx
<div className="chrome-extension-banner">
  <a 
    href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension" 
    target="_blank" 
    rel="noopener noreferrer"
    className="extension-link"
  >
    <span className="icon">🔐</span>
    <span className="text">
      <strong>New!</strong> Chrome Extension Available
    </span>
    <span className="arrow">→</span>
  </a>
</div>
```

CSS в `HeroSection.css`:

```css
.chrome-extension-banner {
  margin-top: 2rem;
  animation: slideInUp 0.6s ease-out;
}

.extension-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #4a9eff 0%, #6c5ce7 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(74, 158, 255, 0.3);
}

.extension-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74, 158, 255, 0.4);
}

.extension-link .icon {
  font-size: 1.5rem;
}

.extension-link .arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.extension-link:hover .arrow {
  transform: translateX(4px);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 2. Ссылка в навигации

Добавь в навигационное меню:

```tsx
<nav>
  <a href="#password">Password</a>
  <a href="#passphrase">Passphrase</a>
  <a href="#pin">PIN</a>
  <a href="#secrets">Secrets</a>
  <a 
    href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension" 
    target="_blank"
    rel="noopener noreferrer"
    className="nav-extension"
  >
    Chrome Extension
    <span className="badge">New</span>
  </a>
</nav>
```

## 3. Отдельная страница /chrome-extension

Создай `password-generator/src/components/ChromeExtensionPage.tsx`:

```tsx
import React from 'react';
import './ChromeExtensionPage.css';

export const ChromeExtensionPage: React.FC = () => {
  return (
    <div className="chrome-extension-page">
      <div className="hero">
        <img src="/icons/icon-128x128.png" alt="Pswdgen Extension" />
        <h1>Pswdgen Chrome Extension</h1>
        <p>Generate secure passwords instantly in your browser</p>
        
        <div className="cta-buttons">
          <a 
            href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📦</span> Install from GitHub
          </a>
          <a 
            href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension#readme" 
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📖</span> View Documentation
          </a>
        </div>
      </div>

      <div className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature">
            <span className="icon">🔐</span>
            <h3>Multiple Generators</h3>
            <p>Passwords, passphrases, and PINs</p>
          </div>
          <div className="feature">
            <span className="icon">⚡</span>
            <h3>Quick Access</h3>
            <p>Ctrl+Shift+P or right-click menu</p>
          </div>
          <div className="feature">
            <span className="icon">🔒</span>
            <h3>100% Private</h3>
            <p>Works offline, no tracking</p>
          </div>
          <div className="feature">
            <span className="icon">💾</span>
            <h3>Smart Settings</h3>
            <p>Remembers your preferences</p>
          </div>
        </div>
      </div>

      <div className="installation">
        <h2>Installation</h2>
        <ol>
          <li>Visit <a href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension">GitHub repository</a></li>
          <li>Click "Code" → "Download ZIP"</li>
          <li>Extract the ZIP file</li>
          <li>Open <code>chrome://extensions/</code></li>
          <li>Enable "Developer mode"</li>
          <li>Click "Load unpacked" and select the folder</li>
        </ol>
      </div>

      <div className="screenshots">
        <h2>Screenshots</h2>
        {/* Add screenshots here */}
      </div>

      <div className="open-source">
        <h2>Open Source</h2>
        <p>
          This extension is open source and available on GitHub.
          Contributions are welcome!
        </p>
        <a 
          href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension"
          className="btn-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>⭐</span> Star on GitHub
        </a>
      </div>
    </div>
  );
};
```

## 4. Футер

Добавь в футер сайта:

```tsx
<footer>
  <div className="footer-links">
    <div className="footer-section">
      <h4>Product</h4>
      <a href="/">Password Generator</a>
      <a href="/secrets">Secret Sharing</a>
      <a href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension">
        Chrome Extension
      </a>
    </div>
    {/* ... other sections ... */}
  </div>
</footer>
```

## 5. Meta Tags для SEO

Добавь в `index.html`:

```html
<meta name="keywords" content="password generator, chrome extension, secure passwords, privacy, open source">
<meta property="og:title" content="Pswdgen - Password Generator & Chrome Extension">
<meta property="og:description" content="Generate secure passwords in your browser. Now available as Chrome extension!">
```

## 6. Announcement Banner (временный)

Добавь временный баннер вверху сайта:

```tsx
<div className="announcement-banner">
  <span className="emoji">🎉</span>
  <span className="text">
    New: Chrome Extension is now available!
  </span>
  <a href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension">
    Install Now →
  </a>
  <button className="close" onClick={closeBanner}>×</button>
</div>
```

CSS:

```css
.announcement-banner {
  background: linear-gradient(135deg, #4a9eff 0%, #6c5ce7 100%);
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.announcement-banner a {
  color: white;
  text-decoration: underline;
  font-weight: 600;
}

.announcement-banner .close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: auto;
}
```

## 7. Analytics

Отслеживай клики на ссылки расширения:

```tsx
const trackExtensionClick = () => {
  if (window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'Chrome Extension',
      event_label: 'GitHub Link',
      value: 1
    });
  }
};

<a 
  href="https://github.com/щааыз�offspringav/pswdgen-chrome-extension"
  onClick={trackExtensionClick}
>
  Chrome Extension
</a>
```

## 8. Sitemap

Добавь в `sitemap.xml`:

```xml
<url>
  <loc>https://pswdgen.com/chrome-extension</loc>
  <lastmod>2026-03-03</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Готово! 🎉

После добавления всех элементов:
1. Деплой на продакшн
2. Проверь все ссылки
3. Тестируй аналитику
4. Мониторь переходы

Расширение будет отличной рекламой для сайта! 🚀
