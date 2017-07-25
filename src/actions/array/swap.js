/**
 * @description Swap array by indexes a and b: a to b, b to a. ES6 Destructuring Assignment Array Matching [a, b] = [b, a];
 * @param a {Number}
 * @param b {Number}
 * @return {MiddlewareArrayFunction}
 * @example
 *
 * import swap from 'apop/ap/swap';
 *
 * swap(2,3)([1,2,3,4,5]);
 * // => [1,2,4,3,5]
 *
 */
const swap = (a, b) =>
  originArr => {
    [originArr[a], originArr[b]] = [originArr[b], originArr[a]];

    return originArr;
  };

export default swap;
