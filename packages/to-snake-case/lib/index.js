import snakeCase from 'lodash/snakeCase';
import mapKeys from 'lodash/mapKeys';

const toSnakeCase = (config = {}) => object => {
  return mapKeys(object, (value, key) => snakeCase(key));
};

module.exports = toSnakeCase;
