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


const renameDataBefore = {
  "year": 2001
};
const renameDataAfter = {
  "fullYear": 2001
};
const renameDataBeforeArray = [{ "year":2001}, {"year": 2001}];
const renameDataAfterArray = [
  {"fullYear": 2001},
  {"fullYear": 2001}
];

const pickDataBefore1 = {id:1, name: "abc", createDate: "01.01.1970", "isActive": false};
const pickDataAfter1 = {id:1, name: "abc"};

const pickDataBeforeArray1 = [
  {id:1, name: "abc", createDate: "01.01.1970", "isActive": false},
  {id:2, name: "bca", createDate: "01.01.1971", "isActive": true}
  ];
const pickDataAfterArray1 = [
  {id:1, name: "abc"},
  {id:2, name: "bca"}
];
const pickDataBefore2 = {key:"bbb", value: "abc", createDate: "01.01.1970", "isActive": false};
const pickDataAfter2 = {id:"bbb", name: "abc"};

const pickDataBeforeArray2 = [
  {key:1, value: "abc", createDate: "01.01.1970", "isActive": false},
  {key:2, value: "bca", createDate: "01.01.1971", "isActive": true}
];
const pickDataAfterArray2 = [
  {id:1, name: "abc"},
  {id:2, name: "bca"}
];
const pickDataBefore3 = {key:"bbb", value: "abc", createDate: "01.01.1970", "isActive": false};
const pickDataAfter3 = {id:"bbb", name: "abc", isEmptyDate: false};

const pickDataBeforeArray3 = [
  {key: "bbb", value: "abc", createDate: "01.01.1970", "isActive": false},
  {key: "ccc", value: "bca", "isActive": true}
];
const pickDataAfterArray3 = [
  {id: "bbb", name: "abc", "isEmptyDate": false},
  {id: "ccc", name: "bca", "isEmptyDate": true}
];
export default {
  clearDataBefore, clearDataAfter,
  clearDataBeforeArray, clearDataAfterArray,

  keysDataBefore, keysCamelCaseDataAfter, keysSnakeCaseDataAfter,
  keysDataBeforeArray, keysCamelCaseDataAfterArray, keysSnakeCaseDataAfterArray,

  updateDataBefore, updateDataAfter,
  updateDataBeforeArray, updateDataAfterArray,

  renameDataBefore, renameDataAfter,
  renameDataBeforeArray, renameDataAfterArray,

  pickDataBefore1, pickDataAfter1,
  pickDataBeforeArray1, pickDataAfterArray1,
  pickDataBefore2, pickDataAfter2,
  pickDataBeforeArray2, pickDataAfterArray2,
  pickDataBefore3, pickDataAfter3,
  pickDataBeforeArray3, pickDataAfterArray3
};