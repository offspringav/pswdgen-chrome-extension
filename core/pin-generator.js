// PIN Generator - переиспользуем логику из основного проекта
class PinGenerator {
  constructor(cryptoService) {
    this.cryptoService = cryptoService;
  }

  generate(config) {
    this.validateConfig(config);

    let pin = '';
    let previousDigit = null;

    for (let i = 0; i < config.length; i++) {
      let digit;

      do {
        const randomDigit = this.cryptoService.getSecureRandomInt(10);
        digit = randomDigit.toString();

        if (!config.excludeRepeated) {
          break;
        }

        if (digit !== previousDigit) {
          break;
        }
      } while (true);

      pin += digit;
      previousDigit = digit;
    }

    return pin;
  }

  validateConfig(config) {
    const validLengths = [4, 6, 8];
    if (!validLengths.includes(config.length)) {
      throw new Error(`PIN length must be one of: ${validLengths.join(', ')}`);
    }
  }
}
