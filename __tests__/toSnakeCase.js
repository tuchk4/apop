import rmk from '~';
import rmkActions from '~/actions';
import mock from '../__mock__';

describe('toSnakeCase', () => {
  it('Transform object to snake_case', () => {
    let formula = rmk(rmkActions.toSnakeCase());
    let result = formula(mock.keysDataBefore);
    expect(result).toEqual(mock.keysSnakeCaseDataAfter);
  });

  it('Transform array of objects to snake_case', () => {
    let formula = rmk(rmkActions.toSnakeCase());
    let result = formula(mock.keysDataBeforeArray);
    expect(result).toEqual(mock.keysSnakeCaseDataAfterArray);
  });
});
