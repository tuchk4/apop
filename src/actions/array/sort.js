/**
 * @memberof ArrayActions
 * @description Sort Array
 * @param sortField {String|Function} sort field or condition function.
 * @param dest {String} [somebody] if sort field = 'asc' or 'desc'
 * @see {@link https://www.w3schools.com/jsref/jsref_filter.asp|w3 schools Array filter}
 *
 * @example
 *
 * import sort from 'ap/sort';
 *
 * sort('id', 'asc')([{id:3}, {id:7}, {id:1}])
 * // => [{id:1}, {id:3}, {id:7}]
 *
 * sort('id', 'desc')([{id:3}, {id:7}, {id:1}])
 * // => [{id:7}, {id:3}, {id:1}]
 *
 * sort((a, b) => {
 *    if (a < b) return -1;
 *    if (a > b) return 1;
 *    return 0;
 * })([3, 7, 1])
 * // => [1, 3, 7]
 */
const sort = (sortField, dest) =>
  originArr => {
    if (typeof sortField === 'function') {
      originArr.sort(sortField);
    } else {
      return originArr.sort((a, b) => {
        if (a[sortField] < b[sortField]) return dest === 'desc' ? 1 : -1;

        if (a[sortField] > b[sortField]) return dest === 'asc' ? 1 : -1;

        return 0;
      });
    }
  };

export default sort;
