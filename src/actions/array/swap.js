/**
 * @description Swap array elements a to b, b to a
 * @param a {Number}
 * @param b {Number}
 * @see {@link https://stackoverflow.com/a/25910841|StackOverflow solution}
 * @return {Array}
 * @example
 *
 * import swap from 'ap/swap';
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
