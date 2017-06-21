const rmkParse = function(config) {
  const actions = config.actions;
  const isRecursive = config.isRecursive;
  const parseEntity = (entity, deep) => {
    if (!isRecursive && deep >= 1) {
      return entity;
    }
    // isObject
    if (entity && entity.constructor === Object) {
      // apply actions to entity
      for (let j = 0, maxActions = actions.length; j < maxActions; j++) {
        //parse by action
        entity = actions[j](entity);
      }

      // deep  parse entity
      for (
        let i = 0, keys = Object.keys(entity), maxEntities = keys.length;
        i < maxEntities;
        i++
      ) {
        entity[keys[i]] = parseEntity(entity[keys[i]], deep + 1);
      }
    } else if (entity && entity.constructor === Array) {
      // copy array
      entity = entity.slice(0);

      // deep parse array entities
      for (let k = 0, entitySize = entity.length; k < entitySize; k++) {
        entity[k] = parseEntity(entity[k], deep);
      }
    }
    return entity;
  };

  return origin => parseEntity(origin, 0);
};

export default rmkParse;
