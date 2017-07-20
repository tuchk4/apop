/**
 * @description Join Array
 * @param separator {String} [somebody] Join separator
 * @see {@link https://www.w3schools.com/jsref/jsref_join.asp|w3 schools Array join}
 * @returns {MiddlewareStringFunction}
 * @example
 *
 * import join from 'apop/ap/join';
 *
 * join('%')([1, 2, 3, 4, 5])
 * // => '1%2%3%4%5'
 *
 */
const join = (separator = ', ') => originArr => originArr.join(separator);
/**
 * originArr => {
  let str = '';
  for (let item of originArr){
    if (item)
    str += item + separator;
  }


  return str.substr(0, str.length - separator.length);
};
 */
export default join;
