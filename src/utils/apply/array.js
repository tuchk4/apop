import isArray from '../isArray';
import isObject from '../isObject';
import runActions from '../runActions';

const apply = function(entity, actions) {
  if (isArray(entity)) {
    //run actions hack for array of objects
    if (isObject(entity[0])) {
      for (let action of actions) {
        entity = action.shortcut ? entity.map(action) : action(entity);
      }
    } else {
      entity = runActions(entity, actions);
    }
  }

  return entity;
};
export default (...args) => origin => apply(origin, args);
