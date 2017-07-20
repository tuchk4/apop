import isArray from '../isArray';
import isObject from '../isObject';
import isFunction from '../isFunction';

export default (entity, callback) => {
  let entitySize = entity.length;
  let copy = [];
  let hasCallback = isFunction(callback);
  for (let i = 0; i < entitySize; i++) {
    let isIterable = isArray(entity[i]) || isObject(entity[i]);
    if (isIterable && hasCallback) {
      copy.push(callback(entity[i]));
    } else {
      copy.push(entity[i]);
    }
  }
  return copy;
};
