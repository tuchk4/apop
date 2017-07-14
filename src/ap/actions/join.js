const join = (separator = ', ') => {
  return originArr => originArr.join(separator);
};

export default join;
