export const apply = (entity, actions) => {
  let isArray = entity && entity.constructor === Array;

  if (isArray) {
    entity = entity.slice(0);
    let entitySize = entity.length;

    for (let i = 0; i < entitySize; i++) {
      let isObject = entity && entity.constructor === Object;
      if (isObject) {
        for (let action of actions) {
          entity[i] = action(entity[i]);
        }
      }
    }
  }

  return entity;
};

export default (...args) => origin => apply(origin, args);
