import shortcuts from '../../lib/shortcuts';
import mock from '../../__mock__';

describe('toCamelCase shortcut', () => {
  it('Transform to camelCase', () => {
    const result = shortcuts.toCamelCase(mock.keysDataBefore);
    expect(result).toEqual(mock.keysCamelCaseDataAfter);
  });

  it('Transform array of objects to snake_case', () => {
    const result = shortcuts.toCamelCase(mock.keysDataBeforeArray);
    expect(result).toEqual(mock.keysCamelCaseDataAfterArray);
  });
});
