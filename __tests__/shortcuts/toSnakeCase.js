import shortcuts from '../../lib/shortcuts';
import mock from '../../__mock__';

describe('toSnakeCase shortcut', () => {
  it('Transform to snake_case', () => {
    const result = shortcuts.toSnakeCase(mock.keysDataBefore);
    expect(result).toEqual(mock.keysSnakeCaseDataAfter);
  });

  it('Transform array of objects to snake_case', () => {
    const result = shortcuts.toSnakeCase(mock.keysDataBeforeArray);
    expect(result).toEqual(mock.keysSnakeCaseDataAfterArray);
  });
});
