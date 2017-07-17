/**
 * @memberof ArrayActions
 * @alias ArrayActions.Sort
 * @description Join Array
 * @param separator {String} [somebody] Join separator
 * @see {@link https://www.w3schools.com/jsref/jsref_join.asp|w3 schools Array join}
 * @returns {String}
 * @example
 *
 * import join from 'ap/join';
 *
 * join('%')([1, 2, 3, 4, 5])
 * // => '1%2%3%4%5'
 *
 */
export default (separator = ', ') => originArr => originArr.join(separator);
