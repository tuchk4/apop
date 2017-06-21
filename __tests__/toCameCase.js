import rmk from '../dist/rmk';

const before = Object.seal({
  id: 1,
  firstName: 'Stephen',
  last_name: 'Nelson',
});

test('Transform object to camelCase', () => {
  const formula = rmk(rmk.toCamelCase());
  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Transform array of objects to camelCase', () => {
  const formula = rmk(rmk.toCamelCase());
  const result = formula([before]);
  expect(result).toMatchSnapshot();
});

// --

it('toCamelCase shortcut: Transform to camelCase', () => {
  const result = rmk.toCamelCase()(before);
  expect(result).toMatchSnapshot();
});

it('toCamelCase shortcut:  Transform array of objects to snake_case', () => {
  const result = rmk.toCamelCase()([before]);
  expect(result).toMatchSnapshot();
});
