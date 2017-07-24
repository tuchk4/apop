import op from '../../src/build/op';
import recursive from '../../src/build/op/recursive';

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
  const formula = op(
    op.clear(),
    op.each((key, value) => {
      return { key: key + '_', value: value * 2 };
    })
  );

  const result = formula(before);
  expect(result).toMatchSnapshot();
});
test('Each transform shortcut', () => {
  const formula = op.each((key, value) => {
    return { key: key + '_', value: value * 2 };
  });

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Recursive flow each transform', () => {
  const formula = op.recursive(
    op.clear(),
    op.each((key, value) => {
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
  const formula = recursive(
    op.each((key, value) => {
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
