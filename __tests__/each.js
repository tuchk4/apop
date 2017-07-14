import rmk from '../src/rmk';

const before = Object.seal({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
});
const beforeDeep = Object.seal({
  a: 1,
  b: 2,
  c: 3,
  d: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    },
  },
});
test('Each transform flow', () => {
  const formula = rmk(
    rmk.each((key, value) => {
      return { key: key + '_', value: value * 2 };
    })
  );

  const result = formula(before);
  expect(result).toMatchSnapshot();
});
test('Each transform shortcut', () => {
  const formula = rmk.each((key, value) => {
    return { key: key + '_', value: value * 2 };
  });

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Recursive flow each transform', () => {
  const formula = rmk.recursive(
    rmk.each((key, value) => {
      if (typeof value == 'number') {
        return { key: key + '_', value: value * 2 };
      } else {
        return { key: key + '_', value: value };
      }
    })
  );

  const result = formula(beforeDeep);
  expect(result).toMatchSnapshot();
});

test('Recursive shortcut each transform', () => {
  const formula = rmk.recursive.each((key, value) => {
    if (typeof value == 'number') {
      return { key: key + '_', value: value * 2 };
    } else {
      return { key: key + '_', value: value };
    }
  });

  const result = formula(beforeDeep);
  expect(result).toMatchSnapshot();
});
