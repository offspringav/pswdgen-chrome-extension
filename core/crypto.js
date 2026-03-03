// Crypto Service - переиспользуем логику из основного проекта
class CryptoService {
  getSecureRandomInt(max) {
    if (max <= 0) {
      throw new Error('max must be greater than 0');
    }

    if (!crypto || !crypto.getRandomValues) {
      throw new Error('Web Crypto API is not available');
    }

    const bitsNeeded = Math.ceil(Math.log2(max));
    const bytesNeeded = Math.ceil(bitsNeeded / 8);
    const maxValue = Math.pow(256, bytesNeeded);
    const limit = maxValue - (maxValue % max);

    let result;
    do {
      const randomBytes = new Uint8Array(bytesNeeded);
      crypto.getRandomValues(randomBytes);

      result = 0;
      for (let i = 0; i < bytesNeeded; i++) {
        result = result * 256 + randomBytes[i];
      }
    } while (result >= limit);

    return result % max;
  }

  getRandomBytes(length) {
    if (length <= 0) {
      throw new Error('length must be greater than 0');
    }

    if (!crypto || !crypto.getRandomValues) {
      throw new Error('Web Crypto API is not available');
    }

    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return bytes;
  }

  async sha1Hash(input) {
    if (!crypto || !crypto.subtle) {
      throw new Error('SubtleCrypto API is not available');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
  }
}

const cryptoService = new CryptoService();
