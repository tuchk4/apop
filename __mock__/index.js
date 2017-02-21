const clearDataBefore = {
  "id": 1,
  "first_name": "Stephen",
  "last_name": "Nelson",
  "email": "snelson0@yellowbook.com",
  "gender": "Male",
  "ip_address": "74.191.108.58",
  "city": "Kapotnya",
  "phrase": "Universal 6th generation portal",
  "null": null,
  "undefined": undefined,
  "date": new Date(2001),
  "0": 0,
  "1": 1,
  "-1": -1,
  // "emptyObject": {},
  // "emptyArray": [],
  "emptyStr": ""
};
const clearDataAfter = {
  "id": 1,
  "first_name": "Stephen",
  "last_name": "Nelson",
  "email": "snelson0@yellowbook.com",
  "gender": "Male",
  "ip_address": "74.191.108.58",
  "city": "Kapotnya",
  "phrase": "Universal 6th generation portal",
  "date": new Date(2001),
  "0": 0,
  "1": 1,
  "-1": -1
};
const clearDataBeforeArray = [{...clearDataBefore}, {...clearDataBefore}];
const clearDataAfterArray = [{...clearDataAfter}, {...clearDataAfter}];

const keysDataBefore = {
  "id": 1,
  "firstName": "Stephen",
  "last_name": "Nelson"
};
const keysCamelCaseDataAfter = {
  "id": 1,
  "firstName": "Stephen",
  "lastName": "Nelson"
};
const keysSnakeCaseDataAfter = {
  "id": 1,
  "first_name": "Stephen",
  "last_name": "Nelson"
};

const keysDataBeforeArray = [{...keysDataBefore}, {...keysDataBefore}];
const keysCamelCaseDataAfterArray = [{...keysCamelCaseDataAfter}, {...keysCamelCaseDataAfter}];
const keysSnakeCaseDataAfterArray = [{...keysSnakeCaseDataAfter}, {...keysSnakeCaseDataAfter}];

export default {
  clearDataBefore, clearDataAfter,
  clearDataBeforeArray, clearDataAfterArray,

  keysDataBefore, keysCamelCaseDataAfter, keysSnakeCaseDataAfter,
  keysDataBeforeArray, keysCamelCaseDataAfterArray, keysSnakeCaseDataAfterArray
};