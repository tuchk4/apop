
const sort = (...args) =>
  originArr => {
    if (typeof args[0] === 'function') {

      let conditionFunction = args[0];
      originArr.sort(conditionFunction);
    } else {

      let sortField = args[0];
      let dest = args[1] || 'asc';
      return originArr.sort((a,b) => {

        if (a[sortField] < b[sortField])
          return dest === 'desc' ? 1 : -1;

        if (a[sortField] > b[sortField])
          return dest === 'asc' ? 1 : -1;

        return 0;
      });
    }

  };

export default sort;
