const sort = (sortField, dest) =>
  originArr => {
    if (typeof sortField === 'function') {
      let conditionFunction = args[0];
      originArr.sort(conditionFunction);
    } else {
      return originArr.sort((a, b) => {
        if (a[sortField] < b[sortField]) return dest === 'desc' ? 1 : -1;

        if (a[sortField] > b[sortField]) return dest === 'asc' ? 1 : -1;

        return 0;
      });
    }
  };

export default sort;
