// Password Generator - переиспользуем логику из основного проекта
const CharacterSets = {
  UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
  DIGITS: '0123456789',
  SPECIAL: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  AMBIGUOUS: '0Ol1I'
};

class PasswordGenerator {
  constructor(cryptoService) {
    this.cryptoService = cryptoService;
  }

  generate(config) {
    const validation = this.validateConfig(config);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    const charset = this.buildCharset(config);
    let password = '';
    
    for (let i = 0; i < config.length; i++) {
      const randomIndex = this.cryptoService.getSecureRandomInt(charset.length);
      password += charset[randomIndex];
    }

    return password;
  }

  validateConfig(config) {
    if (config.length < 4 || config.length > 128) {
      return {
        valid: false,
        error: 'Password length must be between 4 and 128'
      };
    }

    if (!config.useUppercase && !config.useLowercase && 
        !config.useDigits && !config.useSpecial) {
      return {
        valid: false,
        error: 'At least one character type must be selected'
      };
    }

    return { valid: true };
  }

  buildCharset(config) {
    let charset = '';

    if (config.useUppercase) charset += CharacterSets.UPPERCASE;
    if (config.useLowercase) charset += CharacterSets.LOWERCASE;
    if (config.useDigits) charset += CharacterSets.DIGITS;
    if (config.useSpecial) charset += CharacterSets.SPECIAL;

    if (config.excludeAmbiguous) {
      charset = this.removeAmbiguousCharacters(charset);
    }

    return charset;
  }

  removeAmbiguousCharacters(charset) {
    const ambiguous = CharacterSets.AMBIGUOUS.split('');
    return charset.split('')
      .filter(char => !ambiguous.includes(char))
      .join('');
  }
}
