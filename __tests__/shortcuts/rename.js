import shortcuts from '../../lib/shortcuts';
import mock from '../../__mock__';

describe('Rename shortcut', () => {
  it('Field function object', () => {
    const result = shortcuts.rename(mock.renameDataBefore, {
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    });
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('Field static object', () => {
    const result = shortcuts.rename(mock.renameDataBefore, {
      year: 'fullYear',
    });
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('Field function array', () => {
    const result = shortcuts.rename(mock.renameDataBeforeArray, {
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    });
    expect(result).toEqual(mock.renameDataAfterArray);
  });

  it('Field static array', () => {
    const result = shortcuts.rename(mock.renameDataBeforeArray, {
      year: 'fullYear',
    });
    expect(result).toEqual(mock.renameDataAfterArray);
  });
});
