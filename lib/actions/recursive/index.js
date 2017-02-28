import cloneDeep from 'lodash/cloneDeep';
import flow from 'lodash/flow';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';

/**
 * Recursive parse data by actions
 * @memberof actions
 * @param {Array} actions array of actions
 * @param {Number} deepLimit Deep limit. Default 5.
 * @returns {Array| Object} Recursive parsed Data by actions
 * @example
 *
 * let recursiveData = {
 *  foo_bar: 0,
 *  remove_baz: null,
 *  array_key: [1, 2, 3],
 *  array_objects: [
 *   {a_b: 'a', b_c: 'b'}
 *  ]
 * };
 * recursiveData.deep_obj = recursiveData;
 *
 *  const formula = rmk(
 *    rmkActions.recursive(
 *      [
 *        rmkActions.toCamelCase(),
 *        rmkActions.update({
 *            arrayKeyStr: localState =>
 *              ((isArray(localState.arrayKey)) ? localState.arrayKey.join(',') : null),
 *         }),
 *        rmkActions.rename({
 *            arrayKeyStr: 'renamedStr',
 *          }),
 *        rmkActions.clear(),
 *      ]
 *    )
 * );
 * formula(recursiveData);
 * // => { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}], "deepObj":
 * { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}],
 * "deepObj": { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}],
 * "deepObj": { "deepObj": {"fooBar": 0}, "fooBar": 0 }, "fooBar": 0, "renamedStr": "1,2,3" },
 * "fooBar": 0, "renamedStr": "1,2,3" }, "fooBar": 0, "renamedStr": "1,2,3" };
 */
const recursive = (actions, deepLimit = 5) => {
  const parse = (localState, deep = 0) => {
    if (deep >= deepLimit) {
      return null;
    }
    const state = cloneDeep(localState);

    // Deep Array|Object in Object
    if (isPlainObject(state)) {
      Object.keys(state).forEach((key) => {
        const value = state[key];
        if (isPlainObject(value)) {
          state[key] = parse(value, deep + 1);
        }
        if (isArray(value)) {
          state[key] = parse(value, deep + 1);
        }
      });
    }

    // Deep Array|Object in Array
    if (isArray(state)) {
      state.forEach((value, index) => {
        if (isPlainObject(value)) {
          state[index] = parse(value, deep + 1);
        }
        if (isArray(value)) {
          state[index] = parse(value, deep + 1);
        }
      });
    }

    let newState;
    if (isPlainObject(state)) {
      newState = flow(actions)(state);
    } else if (isArray(state)) {
      newState = state.map(arrayState => parse(arrayState, deep + 1))
        .filter(arrayState => !isUndefined(arrayState) && !isNull(arrayState));
    } else {
      newState = state;
    }

    return newState;
  };

  return parse;
};
export default recursive;
