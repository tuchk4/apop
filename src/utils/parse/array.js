import isArray from '../isArray';
import isObject from '../isObject';
import isFunction from '../isFunction';

export default (entity, actions, recursive) => {
  let copy = entity.slice(0);
  let entitySize = copy.length;
  for (let i = 0; i < entitySize; i++) {
    if ((isArray(entity[i]) || isObject(entity[i])) && isFunction(recursive)) {
      copy[i] = recursive(copy[i], actions);
    } else {
      copy[i] = entity[i];
    }
  }
  return copy;
};
