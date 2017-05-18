
const eachKeys = function(origin, callback) {
  const newObject = {};
  var tempObject;

  for (var key in origin) {
    if (origin.hasOwnProperty(key)) {
      tempObject = callback(key, origin[key], origin) || {};
      if (tempObject && Object.keys(tempObject).length !== 0 && tempObject.key) {
        newObject[tempObject.key] = tempObject.value;
      }
    }
  }
  return newObject;
};

export default eachKeys;
