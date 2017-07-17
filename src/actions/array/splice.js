const splice = (start, deleteCount, items) =>
  originArr => {
    originArr.splice(start, deleteCount, items);
    return originArr;
  };

export default splice;
