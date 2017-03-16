import isArray from 'lodash/isArray';
import RmkError from '../../utils/error';

/**
 * Function to swap items in array by indexes
 *
 * @memberof actions
 * @returns {Object} Returns function to swap items in array by indexes
 * @see {@link ../shortcuts#shortcuts.index Shortcut method}
 * @example
 *
 * import swap from 'rmk/actions/swap';
 *
 * let formula = rmk(swap(1, 2))
 * let data = ['foo', 'bar', 'baz']
 * formula(data)
 * // => ['foo', 'baz', 'bar']
 */
const swap = (index1, index2) =>
  arr => {
    if (!isArray(arr)) {
      throw new RmkError('swap should be applied only for arrays');
    }

    const newArray = [ ...arr ];

    const firstItem = newArray[index1];
    const secondItem = newArray[index2];

    newArray[index1] = secondItem;
    newArray[index2] = firstItem;

    return newArray;
  };

export default swap;
