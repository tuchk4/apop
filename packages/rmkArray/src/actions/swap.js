
const swap = (...args) =>
  originArr => {

    let a = args[0];
    let b = args[1];
    // console.log('swap', originArr.length, {args, from, to});
    let tmp = originArr[a];
    originArr[a] = originArr[b];
    originArr[b] = tmp;

    return originArr;
  };

export default swap;
