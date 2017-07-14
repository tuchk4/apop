const join = (...args) => {
  let separator = args[0] || ', ';
  return originArr => originArr.join(separator);
};

export default join;
