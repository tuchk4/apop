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
  date: new Date(2001),
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

test('Map', () => {
  const data = new Map([['x', '0'], ['y', '0'], ['z', null]]);
  const formula = rmk(rmk.clear(), rmk.rename({ x: 'a' }));
  const result = formula(data);
  expect(result).toMatchSnapshot();
});

test('Set with Map', () => {
  const data = new Set();

  data.add(new Map([['x', '0'], ['y', '0']]));
  data.add(new Map([['x', '1'], ['y', '1']]));
  data.add(new Map([['x', null], ['y', '2']]));
  data.add(new Map([['x', '3'], ['y', null]]));
  data.add(new Map([['x', '4'], ['y', '4']]));

  const formula = rmk(rmk.clear());
  const result = formula(data);
  expect(result).toMatchSnapshot();
});
