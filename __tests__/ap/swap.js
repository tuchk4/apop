import ap from '../../src/build/ap';
const before = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]];

test('ap.recursive.swap', () => {
  const formula = ap.recursive(ap.swap(1, 3));

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('ap.swap', () => {
  const formula = ap.swap(1, 3);

  const result = formula(before);

  expect(result).toMatchSnapshot();
});
