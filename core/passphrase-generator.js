// Passphrase Generator - переиспользуем логику из основного проекта
class PassphraseGenerator {
  constructor(cryptoService) {
    this.cryptoService = cryptoService;
    this.wordlist = null;
  }

  async generate(config) {
    this.validateConfig(config);

    if (!this.wordlist) {
      this.wordlist = await this.loadWordlist();
    }

    const words = [];
    for (let i = 0; i < config.wordCount; i++) {
      const randomIndex = this.cryptoService.getSecureRandomInt(this.wordlist.length);
      let word = this.wordlist[randomIndex];

      if (config.capitalize) {
        word = this.capitalizeWord(word);
      }

      words.push(word);
    }

    let passphrase = words.join(config.separator);

    if (config.includeNumber) {
      const randomNumber = this.cryptoService.getSecureRandomInt(10000);
      passphrase += randomNumber.toString();
    }

    return passphrase;
  }

  async loadWordlist() {
    try {
      const response = await fetch(chrome.runtime.getURL('wordlists/eff-long-wordlist.txt'));
      const text = await response.text();
      return text.split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'))
        .map(line => {
          const parts = line.split(/\s+/);
          return parts.length > 1 ? parts[1] : parts[0];
        })
        .filter(word => word.length > 0);
    } catch (error) {
      console.error('Failed to load wordlist:', error);
      throw new Error('Failed to load wordlist');
    }
  }

  validateConfig(config) {
    if (config.wordCount < 3 || config.wordCount > 10) {
      throw new Error('Word count must be between 3 and 10');
    }

    if (config.separator.length > 5) {
      throw new Error('Separator length must not exceed 5');
    }
  }

  capitalizeWord(word) {
    if (word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
