import rmkParse from './parse';

const action = function(originalFn) {
  const actionFunction = function(config) {
    const actions = [originalFn(config)];
    return rmkParse({ actions });
  };
  return Object.assign(actionFunction, { originalFn });
};

export default action;
