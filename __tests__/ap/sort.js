import ap from '../../src/build/ap';
const before = [5, 2, 1, 4, 3, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]];

test('ap.recursive.sort', () => {
  const formula = ap.recursive(ap.sort((a, b) => a - b));

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('ap.sort', () => {
  const formula = ap.sort((a, b) => a - b);

  const result = formula(before);

  expect(result).toMatchSnapshot();
});
