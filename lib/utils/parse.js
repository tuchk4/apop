const rmkParse = function(config) {
  const actions = config.actions;
  const isRecursive = config.isRecursive;

  return function(origin) {
    var parseEntity = function(entity, deep) {
      if (!isRecursive && deep >= 1) {
        return entity;
      }
      // isObject
      if (entity && entity.constructor === Object) {
        // apply actions to entity
        for (var j = 0, maxActions = actions.length; j < maxActions; j++) {
          //parse by action
          entity = actions[j](entity);
        }

        // deep  parse entity
        for (
          var i = 0, keys = Object.keys(entity), maxEntities = keys.length;
          i < maxEntities;
          i++
        ) {
          entity[keys[i]] = parseEntity(entity[keys[i]], deep + 1);
        }
      } else if (entity && entity.constructor === Array) {
        // copy array
        entity = entity.slice(0);

        // deep parse array entities
        for (var k = 0, entitySize = entity.length; k < entitySize; k++) {
          entity[k] = parseEntity(entity[k], deep);
        }
      }
      return entity;
    };

    return parseEntity(origin, 0);
  };
};

export default rmkParse;
