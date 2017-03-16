import rmk from '../lib';

export const before = {
  id: 1,
  firstName: 'Stephen',
  last_name: 'Nelson',
};
export const after = {
  id: 1,
  first_name: 'Stephen',
  last_name: 'Nelson',
};

describe('toSnakeCase action', () => {
  it('Transform object to snake_case', () => {
    const formula = rmk(rmk.toSnakeCase());
    const result = formula(before);
    expect(result).toEqual(after);
  });

  it('Transform array of objects to snake_case', () => {
    const formula = rmk(rmk.toSnakeCase());
    const result = formula([before]);
    expect(result).toEqual([after]);
  });
});
