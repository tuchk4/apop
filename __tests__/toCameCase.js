import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__';

describe('toCamelCase', () => {
  it('transform object to camelCase', () => {
    const formula = rmk(rmkActions.toCamelCase());
    const result = formula(mock.keysDataBefore);
    expect(result).toEqual(mock.keysCamelCaseDataAfter);
  });

  it('Transform array of objects to snake_case', () => {
    const formula = rmk(rmkActions.toCamelCase());
    const result = formula(mock.keysDataBeforeArray);
    expect(result).toEqual(mock.keysCamelCaseDataAfterArray);
  });
});
