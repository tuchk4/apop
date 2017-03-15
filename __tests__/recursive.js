import isArray from 'lodash/isArray';

import rmk from '../lib';
import rmkActions from '../lib/actions';

let before1 = {
  foo_bar: 0,
  remove_baz: null,
  array_key: [1, 2, 3],
  array_objects: [
    {a_b: 'a', b_c: 'b'}
  ]
};
before1.deep_obj = before1;
let after1 = {
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


const before2 = [
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

const after2 = [
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
  }
];


const VERSIONS = {
  V1: 'v1',
  V2: 'v2',
};

function versionLinkFn(url, isLink) {
  let version;
  if (url && isLink) {
    version = url.startsWith(`/${VERSIONS.V2}`) ? VERSIONS.V2 : VERSIONS.V1;
  }
  return version;
}

function normalizeUrl(url, version) {
  return version === VERSIONS.V2 ? url.replace(`/${VERSIONS.V2}`, '') : url;
}
function normalizeName(name, version) {
  return version === VERSIONS.V1 ? `${name} old` : name;
}

/* eslint no-confusing-arrow: "error"*/
/* eslint-env es6*/
describe('Recursive action', () => {
  it('Object recursive', () => {
    const formula = rmk(
      rmkActions.recursive(
        [
          rmkActions.toCamelCase(),
          rmkActions.update({
            arrayKeyStr: localState =>
              isArray(localState.arrayKey)
                ? localState.arrayKey.join(',')
                : null,
          }),
          rmkActions.rename({
            arrayKeyStr: 'renamedStr',
          }),
          rmkActions.clear(),
        ],
        3
      )
    );
    const result = formula(before1);

    expect(result).toEqual(after1);
  });

  it('Menu', () => {
    const transformMainMenu = rmk(
      rmkActions.recursive(
        [
          rmkActions.clear(),
          rmkActions.toCamelCase(),
          rmkActions.rename({
            children: 'nodes',
          }),
        ],
        8
      ),
      rmkActions.recursive(
        [
          rmkActions.update({
            isCategory: localState =>
              Object.prototype.hasOwnProperty.call(localState, 'nodes'),
            isLink: localState =>
              !Object.prototype.hasOwnProperty.call(localState, 'nodes'),
          }),
        ],
        8
      ),
      rmkActions.recursive(
        [
          rmkActions.update({
            version: localState =>
              versionLinkFn(localState.url, localState.isLink),
          }),
        ],
        8
      ),
      rmkActions.recursive(
        [
          rmkActions.update({
            url: localState => normalizeUrl(localState.url, localState.version),
            name: localState =>
              normalizeName(localState.name, localState.version),
            isOpen: localState => {
              let isOpen = null;
              if (localState.isCategory) {
                isOpen = false;
              }
              return isOpen;
            },
          }),
          rmkActions.clear(),
        ],
        8
      )
    );
    const result = transformMainMenu(before2);

    expect(result).toEqual(after2);
  });
});
