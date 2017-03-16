export default class RmkError extends Error {
  constructor(message) {
    // TODO: show docs url depending on error type
    super(`RmkError: ${message}. Docs: https://github.com/tuchk4/rmk`);

    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}
