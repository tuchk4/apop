import rmk from '../src/rmk';

const before = Object.seal({
  id: 1,
  firstName: 'Stephen',
  last_name: 'Nelson',
});

test('Transform object to snake_case', () => {
  const formula = rmk(rmk.toSnakeCase());
  const result = formula(before);

  expect(result).toMatchSnapshot();
});

test('Transform array of objects to snake_case', () => {
  const formula = rmk(rmk.toSnakeCase());
  const result = formula([before]);

  expect(result).toMatchSnapshot();
});

test('toSnakeCase shortcut: Transform to snake_case', () => {
  const result = rmk.toSnakeCase()(before);
  expect(result).toMatchSnapshot();
});

test('toSnakeCase shortcut: Transform array of objects to snake_case', () => {
  const result = rmk.toSnakeCase()([before]);
  expect(result).toMatchSnapshot();
});
