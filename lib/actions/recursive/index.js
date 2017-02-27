import isArray from 'lodash/isArray';

import isPlainObject from 'lodash/isPlainObject';
import cloneDeep from 'lodash/cloneDeep';
import flow from 'lodash/flow';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';

/**
 * Recursive parse data by actions
 * @param {Array} actions array of actions
 * @param deepLimit Deep limit. Default 5.
 * @returns {*}
 */
const recursive = (actions, deepLimit = 5) => {

  const parse = (localState, deep = 0) => {
    if (deep >= deepLimit){
      return null;
      }
    let state = cloneDeep(localState);

    //Deep Array|Object in Object
    if (isPlainObject(state)) {

      for (let key of Object.keys(state)) {
        let value = state[key];
        if (isPlainObject(value)) {
          let newState = parse(value, deep + 1);
          state[key] = newState;
        }
        if (isArray(value)) {
          state[key] = parse(value, deep + 1);
        }
      }
    }

    //Deep Array|Object in Array
    if (isArray(state)) {

      for (let index of state) {
        let value = state[index];
        if (isPlainObject(value)) {
          state[index] = parse(value, deep + 1);
        }
        if (isArray(value)) {
          state[index] = parse(value, deep + 1);
        }
      }
    }

    let newState;
    if (isPlainObject(state)) {
      newState = flow(actions)(state);
    } else if (isArray(state)){
      newState = state.map(localState => parse(localState, deep + 1))
        .filter(localState => !isUndefined(localState) && !isNull(localState))
    } else {
      newState = state;
    }

    return newState;
  };

  return parse;
};
export default recursive;