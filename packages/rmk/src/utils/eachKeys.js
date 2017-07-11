const eachKeys = (origin, callback) => {
  const newObject = {};
  var tempObject;

  for (let key in origin) {
    if (origin.hasOwnProperty(key)) {
      tempObject = callback(key, origin[key], origin);
      if (tempObject && tempObject.key) {
        newObject[tempObject.key] = tempObject.value;
      }
    }
  }
  return newObject;
};

export default eachKeys;
