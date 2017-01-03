const reduceObject = (origin, remakers) => {
  return remakers.reduce((state, remake) => {
    return remake(state);
  }, origin);
};

const reduceArray = (origin, remakers) => {
  return origin.reduce((state, element) => {
    state.push(reduceObject(element, remakers));
    return state;
  }, []);
};

const reduce = (origin, reamakers) => {
  if (isArray(origin)) {
    return reduceArray(origin, mutators);
  } else if (isObject(origin)) {
    return reduceObject(origin, reamakers);
  } else {
    throw new Error('Wrong input arguments');
  }
};

const rmk = (...reamakers) => {
  return origin => reduce(origin, reamakers);
};

export default rmk;
