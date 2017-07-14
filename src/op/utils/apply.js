export const apply = function(...actions) {
  console.log('op.apply init');
  return function(entity) {
    console.log('op.apply run');
    const isObject = entity && entity.constructor === Object;

    if (isObject) {
      for (let action of actions) {
        entity = action(entity);
      }
    }

    return entity;
  };
};

export const recursiveApply = function(...actions) {
  return entity => {
    const isObject = entity && entity.constructor === Object;

    if (isObject) {
      for (let action of actions) {
        entity = action(entity);
      }
    }

    let isArray = entity && entity.constructor === Array;
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
//
// export default {
//   apply: (...actions) => origin => apply(origin, actions),
//   recursiveApply: (...actions) => origin => recursiveApply(origin, actions)
// }
