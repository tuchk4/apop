const removeByIndex = originIndex =>
  originArr => {
    const len = originArr.length;
    if (!len) return;
    let index = originIndex;
    while (index < len) {
      originArr[index] = originArr[index + 1];
      index++;
    }

    originArr.length--;

    return originArr;
  };

/**
 * @memberof ArrayActions
 * @description Test
 * @param indexes {Number} Remove indexes, separate by comma
 * @return Array
 * @example
 *
 * import remove from 'ap/remove';
 *
 * remove(1, 3, 5)([1, 2, 3, 4, 5]);
 * // => [2, 4]
 *
 */
const remove = (...indexes) =>
  originArr => {
    let elements = [];
    for (let index of indexes) {
      elements.push(originArr[index]);
    }

    for (let element of elements) {
      const index = originArr.indexOf(element);
      if (index === undefined) continue;

      originArr = removeByIndex(index)(originArr);
    }
    return originArr;
  };

export default remove;
