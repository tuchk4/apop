
const crop = (...args) =>
  originArr => {
    let start = args[0];
    let deleteCount = args[1];
    let items = args[2];

    originArr.splice(start, deleteCount, items);

    return originArr;
  };

export default crop;
