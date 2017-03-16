import rmk from '../lib';
import reduce from '../lib/utils/reduce';

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
  date: new Date(Date.UTC(2001, 1, 1)),
  0: 0,
  1: 1,
  '-1': -1,
  emptyStr: '',
};

test('Object argument', () => {
  const result = reduce(before, [rmk.clear()]);
  expect(result).toMatchSnapshot();
});

test('Array argument', () => {
  const result = reduce([before], [rmk.clear()]);
  expect(result).toMatchSnapshot();
});
