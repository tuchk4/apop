import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import flow from 'lodash/flow';

const parseObject = (origin, actions) => {
  return flow(actions)(origin);
};

const parseArray = (origin, actions) => {
  return origin.map(element => parseObject(element, actions));
};

const reduce = (origin, actions) => {
  if (isArray(origin)) {
    return parseArray(origin, actions);
  } else if (isObject(origin)) {
    return parseObject(origin, actions);
  } else {
    throw new Error('Wrong input arguments');
  }
};

const rmk = (...actions) => {
  return origin => reduce(origin, actions);
};
module.exports = rmk;
