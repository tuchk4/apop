const parseEntity = (entity, deep, config) => {
  // isObject
  if (entity && entity.constructor === Object) {
    // apply actions to entity
    for (let j = 0, maxActions = config.actions.length; j < maxActions; j++) {
      //parse by action. copy object in utils eachKeys
      entity = config.actions[j](entity);
    }

    // deep  parse entity
    if (config.isRecursive) {
      let keys = Object.keys(entity);
      for (let i = 0; i < keys.length; i++) {
        entity[keys[i]] = parseEntity(entity[keys[i]], deep + 1, config);
      }
    }
  } else if (
    entity &&
    entity.constructor === Array &&
    (config.isRecursive || (!config.isRecursive && deep == 0))
  ) {
    // copy array
    entity = entity.slice(0);

    // deep parse array entities
    if (config.isRecursive || (!config.isRecursive && deep == 0)) {
      let entitySize = entity.length;
      for (let i = 0; i < entitySize; i++) {
        entity[i] = parseEntity(entity[i], deep, config);
      }
    }
  }
  return entity;
};

const rmkParse = config => origin => parseEntity(origin, 0, config);

export default rmkParse;
