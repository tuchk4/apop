import rmk from '../lib';
import rmkActions from '../lib/actions';

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
    const formula = rmk(rmkActions.toSnakeCase());
    const result = formula(before);
    expect(result).toEqual(after);
  });

  it('Transform array of objects to snake_case', () => {
    const formula = rmk(rmkActions.toSnakeCase());
    const result = formula([before]);
    expect(result).toEqual([after]);
  });
});
