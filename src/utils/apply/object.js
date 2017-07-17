import isObject from '../isObject';

import runActions from '../runActions';

const apply = (entity, actions) => {
  if (isObject(entity)) {
    entity = runActions(entity, actions);
  }

  return entity;
};
export default (...args) => origin => apply(origin, args);
