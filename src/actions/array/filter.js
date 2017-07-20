/**
 * @description Filter Array
 * @function filter
 * @param condition {Function} Filter condition
 * @see {@link https://www.w3schools.com/jsref/jsref_filter.asp|w3 schools Array filter}
 * @return {MiddlewareArrayFunction}
 *
 * @example
 *
 * import filter from 'apop/ap/filter';
 *
 * filter((el) => el > 2)([1, 2, 3, 4, 5])
 * // => [3, 4, 5]
 *
 */
const filterWrapper = condition => origin => origin.filter(condition);
// i => {
//   return (typeof i !== "object") ? condition(i) : true;
// });

export default filterWrapper;
