import shortcuts from '../../lib/shortcuts';
import mock from '../../__mock__';

describe('rename', () => {
  it('field function object', () => {
    const result = shortcuts.rename(mock.renameDataBefore, {
      year: localState => ((localState.year.toString().length === 4) ? 'fullYear' : 'year'),
    });
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('field static object', () => {
    const result = shortcuts.rename(mock.renameDataBefore, {
      year: 'fullYear',
    });
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('field function array', () => {
    const result = shortcuts.rename(mock.renameDataBeforeArray, {
      year: localState => ((localState.year.toString().length === 4) ? 'fullYear' : 'year'),
    });
    expect(result).toEqual(mock.renameDataAfterArray);
  });

  it('field static array', () => {
    const result = shortcuts.rename(mock.renameDataBeforeArray, {
      year: 'fullYear',
    });
    expect(result).toEqual(mock.renameDataAfterArray);
  });
});
