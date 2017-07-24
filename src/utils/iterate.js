import isArray from '../isArray';
import isObject from '../isObject';
import isFunction from '../isFunction';

function* objectEntries(obj) {
  let entries = Object.entries(obj);

  for (let [key, value] of entries) {
    yield [key, value];
  }
}
function* arrayEntries(arr) {
  for (let [index, value] of arr) {
    yield [index, value];
  }
}

export default (entity, callback) => {
  let copy = entity.slice(0);
  let entitySize = copy.length;

  let hasCallback = isFunction(callback);
  for (let i = 0; i < entitySize; i++) {
    let isIterable = isArray(entity[key]) || isObject(entity[key]);
    if (isIterable && hasCallback) {
      copy[i] = callback(copy[i]);
    }
  }
  return copy;
};
