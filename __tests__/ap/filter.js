import ap from '../../src/build/ap';
const before = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]];

test('ap.recursive.filter', () => {
  const formula = ap.recursive(ap.filter(num => num > 3 && num < 13));

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('ap.filter', () => {
  const formula = ap.filter(num => num > 3 && num < 13);

  const result = formula(before);

  expect(result).toMatchSnapshot();
});
