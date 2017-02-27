import shortcuts from '../../lib/shortcuts';
import mock from '../../__mock__';

describe('Clear', () => {
  it('Clear remove undefined and null values', () => {
    const result = shortcuts.clear(mock.clearDataBefore);
    expect(result).toEqual(mock.clearDataAfter);
  });

  it('Clear array of objects', () => {
    const result = shortcuts.clear(mock.clearDataBeforeArray);
    expect(result).toEqual(mock.clearDataAfterArray);
  });
});
