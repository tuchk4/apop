import flow from 'lodash/flow';

import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import isMap from 'lodash/isMap';
import isSet from 'lodash/isSet';

import * as mapUtils from '../../utils/map';
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
 *    rmk.recursive(
 *      [
 *        rmk.toCamelCase(),
 *        rmk.update({
 *            arrayKeyStr: localState =>
 *              ((isArray(localState.arrayKey)) ? localState.arrayKey.join(',') : null),
 *         }),
 *        rmk.rename({
 *            arrayKeyStr: 'renamedStr',
 *          }),
 *        rmk.clear(),
 *      ]
 *    )
 * );
 * formula(recursiveData);
 * // => { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}], "deepObj":
 * // { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}],
 * // "deepObj": { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}],
 * // "deepObj": { "deepObj": {"fooBar": 0}, "fooBar": 0 }, "fooBar": 0, "renamedStr": "1,2,3" },
 * // "fooBar": 0, "renamedStr": "1,2,3" }, "fooBar": 0, "renamedStr": "1,2,3" };
 */
const recursive = (actions, deepLimit = 5) => {
  const parse = (localState, deep = 0) => {
    if (deep >= deepLimit) {
      return null;
    }

    if (isSet(localState)) {
      localState = [...localState];
    }

    if (isMap(localState)) {
      localState = mapUtils.decode(localState);
    }

    if (isArray(localState)) {
      let state = [...localState];

      return state.map(element => {
        const objectLikeElement = isPlainObject(element) || isMap(element);
        return objectLikeElement ? parse(element, deep + 1) : element;
      });
    } else if (isPlainObject(localState)) {
      let state = { ...localState };
      Object.keys(state).forEach(key => {
        const value = state[key];
        const objectLikeValue = isPlainObject(value) || isMap(value);
        const arrayLikeValue = isArray(value) || isSet(value);
        if (objectLikeValue || arrayLikeValue) {
          state[key] = parse(value, deep + 1);
        }
      });

      return flow(actions)(state);
    } else {
      throw new Error('Resurive parse error localState:' + typeof localState);
    }
  };

  return parse;
};
export default recursive;
