/**
 * @memberof ArrayActions
 * @description Test
 * @param condition {Function} Filter condition
 * @see {@link https://www.w3schools.com/jsref/jsref_filter.asp|w3 schools Array filter}
 * @return Array
 *
 * @example
 *
 * import filter from 'ap/filter';
 *
 * filter((el) => el > 2)([1, 2, 3, 4, 5])
 * // => [3, 4, 5]
 *
 */
const filter = condition =>
  originArr => {
    return originArr.filter(condition);
  };

export default filter;
