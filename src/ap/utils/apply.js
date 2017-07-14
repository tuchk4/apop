export const apply = function(...actions) {
  return entity => {
    let isArray = entity && entity.constructor === Array;

    if (isArray) {
      for (let action of actions) {
        let isArrayOfObject = entity[0].constructor === Object;
        let isObjectAction = action.shortcut;

        if (isArrayOfObject && isObjectAction) {
          entity = entity.map(action);
        } else {
          entity = action(entity);
        }
      }
    }

    return entity;
  };
};

export const recursiveApply = function(...actions) {
  return entity => {
    let isArray = entity && entity.constructor === Array;

    if (isArray) {
      for (let action of actions) {
        entity = action(entity);
      }
    }

    const isObject = entity && entity.constructor === Object;
    if (isObject) {
      let keys = Object.keys(entity);
      for (let i = 0; i < keys.length; i++) {
        entity[keys[i]] = recursiveApply(entity[keys[i]], actions);
      }
    } else if (isArray) {
      entity = entity.slice(0);
      let entitySize = entity.length;
      for (let i = 0; i < entitySize; i++) {
        entity[i] = recursiveApply(entity[i], actions);
      }
    }

    return entity;
  };
};
