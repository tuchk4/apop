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

const remove = (...indexes) => {
  return originArr => {
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
};

export default remove;
