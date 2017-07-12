const isArray = (entity) => {
  return entity && entity.constructor === Array
};
const parseEntity = (entity, deep, config) => {
  const allowParse = config.isRecursive || (!config.isRecursive && deep == 0);

  // isArray
  if (isArray(entity) && allowParse) {
    // copy array
    entity = entity.slice(0);

    for (let j = 0, maxActions = config.actions.length; j < maxActions; j++) {
      //parse by action. copy object in utils eachKeys
      entity = config.actions[j](entity);
    }

    // deep parse array in deep
    if (isArray(entity) && allowParse) {
      let entitySize = entity.length;
      for (let i = 0; i < entitySize; i++) {
        entity[i] = parseEntity(entity[i], deep + 1, config);
      }
    }
  }
  return entity;
};

const rmkArrayParse = config => origin => parseEntity(origin, 0, config);

export default rmkArrayParse;
