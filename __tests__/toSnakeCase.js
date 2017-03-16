import rmk from '../lib';
import shortcuts from '../lib/shortcuts';

export const before = {
  id: 1,
  firstName: 'Stephen',
  last_name: 'Nelson',
};

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

test('toSnakeCase shorcut: Transform to snake_case', () => {
  const result = shortcuts.toSnakeCase(before);
  expect(result).toMatchSnapshot();
});

test('toSnakeCase shorcut: Transform array of objects to snake_case', () => {
  const result = shortcuts.toSnakeCase([before]);
  expect(result).toMatchSnapshot();
});
