import isArray from '../isArray';
import isObject from '../isObject';
import isFunction from '../isFunction';

export default (entity, callback) => {
  let keys = Object.keys(entity);
  let copy = {};
  let hasCallback = isFunction(callback);
  for (let key of keys) {
    let isIterable = isArray(entity[key]) || isObject(entity[key]);
    if (isIterable && hasCallback) {
      copy[key] = callback(entity[key]);
    } else {
      copy[key] = entity[key];
    }
  }
  return copy;
};
