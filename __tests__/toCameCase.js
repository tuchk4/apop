import ap from '../src/ap';
import op from '../src/op';

const before = Object.seal({
  id: 1,
  firstName: 'Stephen',
  last_name: 'Nelson',
});

test('Transform object to camelCase', () => {
  const formula = op(op.toCamelCase());
  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Transform array of objects to camelCase', () => {
  const formula = ap(op.toCamelCase());
  const result = formula([before]);
  expect(result).toMatchSnapshot();
});

// --

it('toCamelCase shortcut: Transform to camelCase', () => {
  const result = op.toCamelCase()(before);
  expect(result).toMatchSnapshot();
});

it('toCamelCase shortcut:  Transform array of objects to snake_case', () => {
  const result = ap(op.toCamelCase())([before]);
  expect(result).toMatchSnapshot();
});
