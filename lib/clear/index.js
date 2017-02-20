import reduce from 'lodash/reduce';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';

module.exports = (config = {}) => object => {
  return reduce(object, (result, value, key) => {
      if (isNull(value) || isUndefined(value)) {
          return result;
      }
      result[key] = value;
      return result;
    }, {});
};
