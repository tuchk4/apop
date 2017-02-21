import shortcuts from '~/shortcuts';
import mock from '../../__mock__';

describe('toSnakeCase', () => {
  it('Transform to snake_case', () => {
    let result = shortcuts.toSnakeCase(mock.keysDataBefore);
    expect(result).toEqual(mock.keysSnakeCaseDataAfter);
  });

  it('Transform array of objects to snake_case', () => {
    let result = shortcuts.toSnakeCase(mock.keysDataBeforeArray);
    expect(result).toEqual(mock.keysSnakeCaseDataAfterArray);
  });
});
