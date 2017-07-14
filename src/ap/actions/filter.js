const filter = condition =>
  originArr => {
    return originArr.filter(condition);
  };

export default filter;
