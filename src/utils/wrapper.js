export default fn =>
  (...args) => Object.assign(fn(...args), { shortcut: true });
