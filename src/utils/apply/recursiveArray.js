import isArray from '../isArray';
import isObject from '../isObject';

import parseObject from '../parse/object';
import flow from '../flow';

const apply = (...actions) => {
  const run = flow(actions);
  const recursive = origin => {
    switch (true) {
      case isObject(origin):
        origin = parseObject(origin, recursive);
        break;
      case isArray(origin):
        let state = [];
        let processed = [];

        for (let item of origin) {
          let isIterableItem = isArray(item) || isObject(item);
          if (isIterableItem) {
            const children = run(state);
            let isIterableChildren = isArray(children) || isObject(children);
            if (isIterableChildren) {
              processed.push(...children);
            } else {
              processed.push(children);
            }
            state = [];
            processed.push(recursive(item));
          } else {
            state.push(item);
          }
        }
        if (state.length) {
          const children = run(state);
          let isIterableChildren = isArray(children) || isObject(children);
          if (isIterableChildren) {
            processed.push(...children);
          } else {
            processed.push(children);
          }
        }

        origin = processed;

        break;
    }
    return origin;
  };

  return recursive;
};

export default apply;
