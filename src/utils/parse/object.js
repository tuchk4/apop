import isArray from '../isArray';
import isObject from '../isObject';
import isFunction from '../isFunction';

export default (entity, actions, recursive) => {
  let keys = Object.keys(entity);
  let copy = {};
  for (let key of keys) {
    if (
      (isArray(entity[key]) || isObject(entity[key])) && isFunction(recursive)
    ) {
      copy[key] = recursive(entity[key], actions);
    } else {
      copy[key] = entity[key];
    }
  }
  return copy;
};
