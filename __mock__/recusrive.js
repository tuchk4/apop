let recursiveBefore = {
  foo_bar: 0,
  remove_baz: null,
  array_key: [1, 2, 3],
  array_objects: [
    {a_b: 'a', b_c: 'b'}
  ]
};
recursiveBefore.deep_obj = recursiveBefore;
let recursiveAfter = {
  "arrayKey": [1, 2, 3],
  "arrayObjects": [{"aB": "a", "bC": "b"}],
  "deepObj": {
    "arrayKey": [1, 2, 3],
    "arrayObjects": [{"aB": "a", "bC": "b"}],
    "deepObj": {
      "arrayKey": [1, 2, 3],
      "arrayObjects": [{"aB": "a", "bC": "b"}],
      "deepObj": {
        "deepObj": {"fooBar": 0},
        "fooBar": 0
      },
      "fooBar": 0,
      "renamedStr": "1,2,3"
    },
    "fooBar": 0,
    "renamedStr": "1,2,3"
  },
  "fooBar": 0,
  "renamedStr": "1,2,3"
};

export default {recursiveBefore, recursiveAfter};