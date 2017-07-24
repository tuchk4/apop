import filter from '../../../actions/array/filter';
import join from '../../../actions/array/join';
import map from '../../../actions/array/map';
import remove from '../../../actions/array/remove';
import sort from '../../../actions/array/sort';
import swap from '../../../actions/array/swap';

import recursiveApply from '../../../utils/apply/recursiveArray';

const sourceActions = { filter, join, map, remove, sort, swap };
/**
 * @namespace ap.recursive
 * @type {Function|Object}
 */
const recursive = Object.assign(recursiveApply, sourceActions);

export default recursive;
