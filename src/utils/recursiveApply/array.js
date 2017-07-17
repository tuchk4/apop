import isArray from '../isArray';
import isObject from '../isObject';
import parseArray from '../parse/array';
import parseObject from '../parse/object';
import runActions from '../runActions';

const recursiveApply = (entity, actions) => {
  switch (true) {
    case isObject(entity):
      entity = parseObject(entity, actions, recursiveApply);
      break;
    case isArray(entity):
      entity = runActions(entity, actions);
      entity = parseArray(entity, actions, recursiveApply);
      break;
  }
  return entity;
};
export default (...args) => origin => recursiveApply(origin, args);
