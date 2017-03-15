import rmk from '../lib';
import rmkActions from '../lib/actions';

export const before = {
  "id": 1,
  "firstName": "Stephen",
  "last_name": "Nelson"
};
export const after = {
  "id": 1,
  "firstName": "Stephen",
  "lastName": "Nelson"
};

describe('toCamelCase action', () => {
  it('Transform object to camelCase', () => {
    const formula = rmk(rmkActions.toCamelCase());
    const result = formula(before);
    expect(result).toEqual(after);
  });

  it('Transform array of objects to camelCase', () => {
    const formula = rmk(rmkActions.toCamelCase());
    const result = formula([before]);
    expect(result).toEqual([after]);
  });
});
