const swap = ([a, b]) =>
  originArr => {
    // console.log('swap', originArr.length, {args, from, to});
    let tmp = originArr[a];
    originArr[a] = originArr[b];
    originArr[b] = tmp;

    return originArr;
  };

export default swap;
