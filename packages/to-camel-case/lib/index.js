import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

const toCamelCase = (config = {}) => object => {
  return mapKeys(object, (value, key) => camelCase(key));
};

module.exports =  toCamelCase;
