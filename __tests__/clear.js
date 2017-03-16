import rmk from '../lib';
import shortcuts from '../lib/shortcuts';

const before = {
  id: 1,
  first_name: 'Stephen',
  last_name: 'Nelson',
  email: 'snelson0@yellowbook.com',
  gender: 'Male',
  ip_address: '74.191.108.58',
  city: 'Kapotnya',
  phrase: 'Universal 6th generation portal',
  null: null,
  undefined,
  date: new Date(2001),
  0: 0,
  1: 1,
  '-1': -1,
  emptyStr: '',
};

test('Clear object', () => {
  const formula = rmk(rmk.clear());

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Clear array of objects', () => {
  const formula = rmk(rmk.clear());

  const result = formula([before]);
  expect(result).toMatchSnapshot();
});

// ---

test('Clear remove undefined and null values', () => {
  const result = shortcuts.clear(before);
  expect(result).toMatchSnapshot();
});

test('Clear array of objects', () => {
  const result = shortcuts.clear([before]);
  expect(result).toMatchSnapshot();
});
