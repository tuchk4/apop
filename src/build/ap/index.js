import filter from '../../actions/array/filter';
import join from '../../actions/array/join';
import map from '../../actions/array/map';
import remove from '../../actions/array/remove';
import sort from '../../actions/array/sort';
import swap from '../../actions/array/swap';

import apply from '../../utils/apply/array';
import recursiveApply from '../../utils/apply/recursiveArray';

const sourceActions = { filter, join, map, remove, sort, swap };

/**
 * @namespace ap
 * @type {Function|Object}
 * @example
 *
 * // Init for each example:
 *
 * import apRecursive from 'apop/op/apRecursive';
 * import ap from 'ap';
 *
 * let deepData = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]];
 * let simpleData = [1, 2, 3, 4 ,5];
 *
 * let filterCondition = (num) => {
 *    return num > 5 && n < 12;
 *  };
 *
 */
const ap = Object.assign(apply, sourceActions);
const recursive = Object.assign(recursiveApply, sourceActions);

export default Object.assign(ap, { recursive });
