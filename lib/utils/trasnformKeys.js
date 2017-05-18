const transformKeys = {
  isLower(char) {
    return char >= 0x61 && char <= 0x7a;
  },
  isUpper(char) {
    return char >= 0x41 && char <= 0x5a;
  },
  isDigit(char) {
    return char >= 0x30 && char <= 0x39;
  },
  toUpperSafe(char) {
    if (this.isLower(char)) {
      return char - 0x20;
    }
    return char;
  },
  toUpperSafe(char) {
    if (this.isLower(char)) {
      return char - 0x20;
    }
    return char;
  },
  toLower(char) {
    return char + 0x20;
  }
};

export default transformKeys;
