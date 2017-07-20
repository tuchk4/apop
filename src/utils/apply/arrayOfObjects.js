import isObject from '../isObject';
import flow from '../flow';

export const apply = (...actions) =>
  origin => {
    let run = flow(actions);
    let copy = [];
    let entitySize = origin.length;

    for (let i = 0; i < entitySize; i++) {
      if (isObject(origin[i])) {
        copy.push(run(origin[i]));
      }
    }
    return copy;
  };

export default apply;
