import camelCase from 'lodash/camelCase';

const toCamelCase = state => {
  return Object.keys(state)
    .reduce((obj, key) => {
      const renamed = camelCase(key);
      obj[renamed] = result[key];

      return obj;
    }, {});
};

export default toCamelCase;
