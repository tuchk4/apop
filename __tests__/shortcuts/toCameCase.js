import shortcuts from '~/shortcuts';
import mock from '../../__mock__';

describe('toCamelCase', () => {
  it('transform to camelCase', () => {
    let result = shortcuts.toCamelCase(mock.keysDataBefore);
    expect(result).toEqual(mock.keysCamelCaseDataAfter);
  });

  it('Transform array of objects to snake_case', () => {
    let result = shortcuts.toCamelCase(mock.keysDataBeforeArray);
    expect(result).toEqual(mock.keysCamelCaseDataAfterArray);
  });
})
