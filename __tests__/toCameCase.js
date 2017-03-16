import rmk from '../lib';
import shortcuts from '../lib/shortcuts';

const before = {
  id: 1,
  firstName: 'Stephen',
  last_name: 'Nelson',
};

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

it('toCamelCase shorcut: Transform to camelCase', () => {
  const result = shortcuts.toCamelCase(before);
  expect(result).toMatchSnapshot();
});

it('toCamelCase shorcut:  Transform array of objects to snake_case', () => {
  const result = shortcuts.toCamelCase([before]);
  expect(result).toMatchSnapshot();
});
