import ap from '../../src/build/ap';
const before = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]];

test('ap.recursive.remove', () => {
  const formula = ap.recursive(ap.remove(1, 2));

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('ap.remove', () => {
  const formula = ap.remove(1, 2);

  const result = formula(before);

  expect(result).toMatchSnapshot();
});
