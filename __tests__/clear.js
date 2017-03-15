import rmk from '../lib';

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
  undefined,
  date: new Date(2001),
  0: 0,
  1: 1,
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
  0: 0,
  1: 1,
  '-1': -1,
};

describe('Clear action', () => {
  it('Clear object', () => {
    const formula = rmk(rmk.clear());

    const result = formula(before);
    expect(result).toEqual(after);
  });

  it('Clear array of objects', () => {
    const formula = rmk(rmk.clear());

    const result = formula([before]);
    expect(result).toEqual([after]);
  });
});
