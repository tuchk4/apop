import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__';

describe('toSnakeCase action', () => {
  it('Transform object to snake_case', () => {
    const formula = rmk(rmkActions.toSnakeCase());
    const result = formula(mock.keysDataBefore);
    expect(result).toEqual(mock.keysSnakeCaseDataAfter);
  });

  it('Transform array of objects to snake_case', () => {
    const formula = rmk(rmkActions.toSnakeCase());
    const result = formula(mock.keysDataBeforeArray);
    expect(result).toEqual(mock.keysSnakeCaseDataAfterArray);
  });
});
