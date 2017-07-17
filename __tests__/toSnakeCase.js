import ap from '../src/build/ap';
import op from '../src/build/op';

const before = Object.seal({
  id: 1,
  firstName: 'Stephen',
  last_name: 'Nelson',
});

test('Transform object to snake_case', () => {
  const formula = op.toSnakeCase();
  const result = formula(before);

  expect(result).toMatchSnapshot();
});

test('Transform array of objects to snake_case', () => {
  const formula = ap(op.toSnakeCase());
  const result = formula([before]);

  expect(result).toMatchSnapshot();
});

test('toSnakeCase shortcut: Transform to snake_case', () => {
  const result = op.toSnakeCase()(before);
  expect(result).toMatchSnapshot();
});

test('toSnakeCase shortcut: Transform array of objects to snake_case', () => {
  const result = ap(op.toSnakeCase())([before]);
  expect(result).toMatchSnapshot();
});
