const filter = (...args) =>
  originArr => {
    let condition = args[0];
    return originArr.filter(condition);
  };

export default filter;
