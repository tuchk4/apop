const swap = (a, b) =>
  originArr => {
    let tmp = originArr[a];
    originArr[a] = originArr[b];
    originArr[b] = tmp;

    return originArr;
  };

export default swap;
