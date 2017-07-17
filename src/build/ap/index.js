import crop from '../../actions/array/splice';
import filter from '../../actions/array/filter';
import join from '../../actions/array/join';
import map from '../../actions/array/map';
import remove from '../../actions/array/remove';
import sort from '../../actions/array/sort';
import swap from '../../actions/array/swap';

import apply from '../../utils/apply/array';
import recursiveApply from '../../utils/recursiveApply/array';

const sourceActions = { crop, filter, join, map, remove, sort, swap };

const ap = Object.assign(apply, sourceActions);
const recursive = Object.assign(recursiveApply, sourceActions);

export default Object.assign(ap, { recursive });
