/**
 * @description Map Array
 * @param callbacks {...Function} Map function
 * @see {@link https://www.w3schools.com/jsref/jsref_map.asp|w3 schools Array map}
 * @return {MiddlewareArrayFunction}
 * @example
 *
 * import map from 'apop/ap/map';
 *
 * map((el) => el + 1)([1, 2, 3, 4, 5]);
 * // => [2, 3, 4, 5, 6]
 *
 */
const map = (...callbacks) =>
  originArr => {
    for (let action of callbacks) {
      originArr = originArr.map(action);
    }
    return originArr;
  };

export default map;
