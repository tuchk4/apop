import rmkActions from '../lib/actions';
import reduce from '../lib/utils/reduce';

export const before = {
  id: 1,
  first_name: 'Stephen',
  last_name: 'Nelson',
  email: 'snelson0@yellowbook.com',
  gender: 'Male',
  ip_address: '74.191.108.58',
  city: 'Kapotnya',
  phrase: 'Universal 6th generation portal',
  null: null,
  undefined: undefined,
  date: new Date(2001),
  '0': 0,
  '1': 1,
  '-1': -1,
  emptyStr: '',
};

export const after = {
  id: 1,
  first_name: 'Stephen',
  last_name: 'Nelson',
  email: 'snelson0@yellowbook.com',
  gender: 'Male',
  ip_address: '74.191.108.58',
  city: 'Kapotnya',
  phrase: 'Universal 6th generation portal',
  date: new Date(2001),
  '0': 0,
  '1': 1,
  '-1': -1,
};

describe('Reduce util', () => {
  it('Object argument', () => {
    const result = reduce(before, [rmkActions.clear()]);
    expect(result).toEqual(after);
  });

  it('Array argument', () => {
    const result = reduce([before], [rmkActions.clear()]);
    expect(result).toEqual([after]);
  });
});
