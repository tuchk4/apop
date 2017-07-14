const isObject = entity => {
  return entity && entity.constructor === Object;
};
export const apply = (...actions) => {
  return entity => {
    const isObject = entity && entity.constructor === Object;

    if (isObject) {
      for (let action of actions) {
        entity = action(entity);
      }
    }

    return entity;
  };
};

export const recursiveApply = (...actions) => {
  return entity => {
    if (isObject(entity)) {
      for (let action of actions) {
        entity = action(entity);
      }
    }

    if (isObject(entity)) {
      let keys = Object.keys(entity);
      for (let key of keys) {
        if (isObject(entity[key])) {
          entity[key] = recursiveApply(...actions)(entity[key]);
        }
      }
    }
    return entity;
  };
};
