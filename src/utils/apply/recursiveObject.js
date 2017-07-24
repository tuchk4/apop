import isArray from '../isArray';
import isObject from '../isObject';
import parseArray from '../parse/array';
import parseObject from '../parse/object';

import flow from '../flow';

const apply = (...actions) => {
  const recursive = origin => {
    switch (true) {
      case isObject(origin):
        origin = flow(actions)(origin);
        origin = parseObject(origin, recursive);
        break;
      case isArray(origin):
        origin = parseArray(origin, recursive);
        break;
    }
    return origin;
  };
  return recursive;
};
export default apply;
