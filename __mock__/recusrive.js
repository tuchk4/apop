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
  fooBar: 0,
  arrayKey: [1, 2, 3],
  arrayObjects: [{aB: 'a', bC: 'b'}],
  deepObj: {
    fooBar: 0,
    arrayKey: [1, 2, 3],
    arrayObjects: [null],
    deepObj: {fooBar: 0},
    renamedStr: '1,2,3'
  },
  renamedStr: '1,2,3'
};


const recursiveMenuBefore = [
  {
    "children": [],
    "name": "1",
    "url": "/1",
  },
  {
    "children": [],
    "name": "2",
    "url": "/v2/2",
  },
  {
    "children": [
      {
        "children": [],
        "name": "3",
        "url": "/v2/3",
      },
      {
        "children": [
          {
            "children": [],
            "name": "3",
            "url": "/3"
          },
          {
            "children": [],
            "name": "4",
            "url": "/v2/4"
          },
          {
            "children": [],
            "name": "5",
            "url": "/v2/5"
          },
        ],
        "name": "6"
      }
    ]
  },
];

const recursiveMenuAfter = [
    {
      "name": "1 old",
      "url": "/1",
      "isCategory": false,
      "isLink": true,
      "version": "v1"
    },
    {
      "name": "2",
      "url": "/2",
      "isCategory": false,
      "isLink": true,
      "version": "v2"
    }, {
      "nodes": [{
        "name": "3",
        "url": "/3",
        "isCategory": false,
        "isLink": true,
        "version": "v2"
      },
        {
          "nodes": [
            {
              "name": "3 old",
              "url": "/3",
              "isCategory": false,
              "isLink": true,
              "version": "v1"
            },
            {
              "name": "4",
              "url": "/4",
              "isCategory": false,
              "isLink": true,
              "version": "v2"
            },
            {
              "name": "5",
              "url": "/5",
              "isCategory": false,
              "isLink": true,
              "version": "v2"
            }
          ],
          "name": "6",
          "isCategory": true,
          "isLink": false,
          "isOpen": false
        }], "isCategory": true, "isLink": false, "isOpen": false
    }]
  ;


export default {recursiveBefore, recursiveAfter, recursiveMenuBefore, recursiveMenuAfter};