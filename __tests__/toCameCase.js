import rmk from 'rmk';
import rmkActions from 'rmk/actions';
import mock from '../__mock__';

describe('toCamelCase', () => {
  it('transform object to camelCase', () => {
    let formula = rmk(rmkActions.toCamelCase());
    let result = formula(mock.keysDataBefore);
    expect(result).toEqual(mock.keysCamelCaseDataAfter);
  });

  it('Transform array of objects to snake_case', () => {
    let formula = rmk(rmkActions.toCamelCase());
    let result = formula(mock.keysDataBeforeArray);
    expect(result).toEqual(mock.keysCamelCaseDataAfterArray);
  });
})
