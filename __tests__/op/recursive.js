import ap from '../../src/build/ap';
import op from '../../src/build/op';
import apop from '../../src/build/apop';

const sample = Object.seal({
  foo_bar: 0,
  remove_baz: null,
  array_key: [1, 2, 3],
  array_objects: [{ a_b: 'a', b_c: 'b' }],
});

const data = Object.seal({
  asObject: Object.assign({ deep_obj: sample }, sample),
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
              name: '4',
              url: '/4',
            },
            {
              children: [],
              name: '5',
              url: '/v2/5',
            },
            {
              children: [],
              name: '6',
              url: '/v2/6',
            },
          ],
          name: '7',
          url: '/7',
        },
      ],
      name: '8',
      url: '/8',
    },
  ],
});

const VERSIONS = Object.seal({
  V1: 'v1',
  V2: 'v2',
});

const versionLinkFn = (url, isLink) => {
  let version;
  if (url && isLink) {
    version = url.startsWith(`/${VERSIONS.V2}`) ? VERSIONS.V2 : VERSIONS.V1;
  }

  return version;
};

const normalizeUrl = (url, version) =>
  version === VERSIONS.V2 ? url.replace(`/${VERSIONS.V2}`, '') : url;

test('Object recursive', () => {
  const formula = op.recursive(
    op.toCamelCase(),
    op.update({
      arrayKeyStr: localState =>
        Array.isArray(localState.arrayKey)
          ? localState.arrayKey.join(',')
          : null,
    }),
    op.rename({
      arrayKeyStr: 'renamedStr',
    }),
    op.clear()
  );

  const result = formula(data.asObject);

  expect(result).toMatchSnapshot();
});
let sum = '';
test('Array recursive', () => {
  const transformMainMenu = op.recursive(
    op.clear(),
    op.toCamelCase(),
    op.rename({
      children: 'nodes',
    }),
    op.update({
      isCategory: localState =>
        Object.prototype.hasOwnProperty.call(localState, 'nodes'),
      isLink: localState =>
        !Object.prototype.hasOwnProperty.call(localState, 'nodes'),
    }),
    op.update({
      version: localState => versionLinkFn(localState.url, localState.isLink),
    }),
    op.update({
      url: localState => normalizeUrl(localState.url, localState.version),
      name: localState => {
        sum += `->${localState.name}`;
        return `!${localState.name}`;
      },
      isOpen: localState => {
        let isOpen = null;
        if (localState.isCategory) {
          isOpen = false;
        }
        return isOpen;
      },
    }),
    op.clear()
  );
  const result = transformMainMenu(data.asArray);

  expect(result).toMatchSnapshot();
  expect(sum).toEqual('->1->2->8->3->7->4->5->6');
});

it('recursive shortcut rename', () => {
  const result = op.recursive(op.rename({ name: 'test' }))(data.asArray);
  expect(result).toMatchSnapshot();
});

it('recursive shortcut toCamelCase', () => {
  const result = op.recursive(op.toCamelCase())(sample);
  expect(result).toMatchSnapshot();
});
