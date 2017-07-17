import isArray from '../isArray';
import isObject from '../isObject';
import runActions from '../runActions';

export const apply = (entity, actions) => {
  if (isArray(entity)) {
    entity = entity.slice(0);
    let entitySize = entity.length;

    for (let i = 0; i < entitySize; i++) {
      if (isObject(entity[i])) {
        entity[i] = runActions(entity[i], actions);
      }
    }
  }
  return entity;
};

export default (...args) => origin => apply(origin, args);
