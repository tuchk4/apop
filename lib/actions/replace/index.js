import isArray from 'lodash/isArray';
import RmkError from '../../utils/error';

/**
 * Function to replace item in array by index
 *
 * @memberof actions
 * @returns {Object} Returns function to replace item in array by index
 * @see {@link ../shortcuts#shortcuts.replace Shortcut method}
 * @example
 *
 * import replace from 'rmk/actions/replace';
 *
 * let formula = rmk(replace(1, 'baz' ))
 * let data = ['foo', 'bar']
 * formula(data)
 * // => ['foo', 'baz']
 */
const replace = (replace, newItem) =>
  arr => {
    if (!isArray(arr)) {
      throw new RmkError('replace should be applied only for arrays');
    }

    const newArray = [...arr];
    newArray[replace] = newItem;

    return newArray;
  };

export default replace;
