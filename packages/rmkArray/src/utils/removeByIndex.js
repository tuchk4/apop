
const removeByIndex = (originIndex) =>
  originArr => {
    const len = originArr.length;
    if (!len) return;
    var index = originIndex;
    while (index < len) {
      originArr[index] = originArr[index+1];
      index++
    }

    originArr.length--;

    return originArr;
  };

export default removeByIndex;
