import snakeCase from 'lodash/snakeCase';

const toSnakeCase = state => {
  return Object.keys(state)
    .reduce((obj, key) => {
      const renamed = snakeCase(key);
      obj[renamed] = result[key];

      return obj;
    }, {});
};

export default toSnakeCase;
