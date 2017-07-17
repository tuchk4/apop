/**
 * @description Map Array
 * @param callback {Function} Map function
 * @see {@link https://www.w3schools.com/jsref/jsref_map.asp|w3 schools Array map}
 * @return Array
 * @example
 *
 * import map from 'ap/map';
 *
 * map((el) => el + 1)([1, 2, 3, 4, 5]);
 * // => [2, 3, 4, 5, 6]
 *
 */
const map = callback =>
  originArr => {
    try {
      return originArr.map(callback);
    } catch (err) {
      console.log('err', err);
    }
  };

export default map;
