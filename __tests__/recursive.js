import isArray from 'lodash/isArray';
import rmk from '../lib';
import * as mapUtils from '../lib/utils/map';

const sample = {
  foo_bar: 0,
  remove_baz: null,
  array_key: [1, 2, 3],
  array_objects: [{ a_b: 'a', b_c: 'b' }],
};

const data = {
  asObject: {
    ...sample,
    deep_obj: sample,
  },
  asArray: [
    {
      children: [],
      name: '1',
      url: '/1',
    },
    {
      children: [],
      name: '2',
      url: '/v2/2',
    },
    {
      children: [
        {
          children: [],
          name: '3',
          url: '/v2/3',
        },
        {
          children: [
            {
              children: [],
              name: '3',
              url: '/3',
            },
            {
              children: [],
              name: '4',
              url: '/v2/4',
            },
            {
              children: [],
              name: '5',
              url: '/v2/5',
            },
          ],
          name: '6',
        },
      ],
    },
  ],
};

const VERSIONS = {
  V1: 'v1',
  V2: 'v2',
};

const versionLinkFn = (url, isLink) => {
  let version;
  if (url && isLink) {
    version = url.startsWith(`/${VERSIONS.V2}`) ? VERSIONS.V2 : VERSIONS.V1;
  }

  return version;
};

const normalizeUrl = (url, version) =>
  version === VERSIONS.V2 ? url.replace(`/${VERSIONS.V2}`, '') : url;
const normalizeName = (name, version) =>
  version === VERSIONS.V1 ? `${name} old` : name;

test('Object recursive', () => {
  const formula = rmk(
    rmk.recursive(
      [
        rmk.toCamelCase(),
        rmk.update({
          arrayKeyStr: localState =>
            isArray(localState.arrayKey) ? localState.arrayKey.join(',') : null,
        }),
        rmk.rename({
          arrayKeyStr: 'renamedStr',
        }),
        rmk.clear(),
      ],
      3
    )
  );

  const result = formula(data.asObject);

  expect(result).toMatchSnapshot();
});

test('Array recursive', () => {
  const transformMainMenu = rmk(
    rmk.recursive(
      [
        rmk.clear(),
        rmk.toCamelCase(),
        rmk.rename({
          children: 'nodes',
        }),
      ],
      8
    ),
    rmk.recursive(
      [
        rmk.update({
          isCategory: localState =>
            Object.prototype.hasOwnProperty.call(localState, 'nodes'),
          isLink: localState =>
            !Object.prototype.hasOwnProperty.call(localState, 'nodes'),
        }),
      ],
      8
    ),
    rmk.recursive(
      [
        rmk.update({
          version: localState =>
            versionLinkFn(localState.url, localState.isLink),
        }),
      ],
      8
    ),
    rmk.recursive(
      [
        rmk.update({
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
        rmk.clear(),
      ],
      8
    )
  );
  const result = transformMainMenu(data.asArray);

  expect(result).toMatchSnapshot();
});

test('Array recursive with map', () => {
  const data = new Set();

  data.add(new Map([['x', '0'], ['y', null]]));
  data.add(new Map([['x', '1'], ['y', '1']]));
  data.add(new Map([['x', null], ['y', '2']]));
  data.add(new Map([['x', '3'], ['y', '3']]));
  data.add(new Map([['x', '4'], ['y', '4']]));
  data.add(new Map([['deep', data]]));

  const formula = rmk(rmk.recursive([rmk.clear()], 6));
  const result = formula(data);
  expect(result).toMatchSnapshot();
});
