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

const updateDataBefore = {
  "date": new Date(2001,11,3),
};
const updateDataAfter = {
  "date": new Date(2001,11,3),
  "year": 2001,
  "month": 11,
  "day": 3
};
const updateDataBeforeArray = [{...updateDataAfter,  "date": new Date(2000,1,3)}, {...updateDataAfter, "date": new Date(2002,4,5)}];
const updateDataAfterArray = [
  {...updateDataAfter, "date": new Date(2000,1,3), year: 2000, month:1, day:3},
  {...updateDataAfter, "date": new Date(2002,4,5), year: 2002, month:4, day:5},
];
export default {
  clearDataBefore, clearDataAfter,
  clearDataBeforeArray, clearDataAfterArray,

  keysDataBefore, keysCamelCaseDataAfter, keysSnakeCaseDataAfter,
  keysDataBeforeArray, keysCamelCaseDataAfterArray, keysSnakeCaseDataAfterArray,

  updateDataBefore, updateDataAfter,
  updateDataBeforeArray, updateDataAfterArray
};