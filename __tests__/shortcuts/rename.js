import shortcuts from '~/shortcuts';
import mock from '../../__mock__';

describe('rename', () => {

  it('field function object', () => {
    let result = shortcuts.rename(mock.renameDataBefore, {
      year: (localState) => {
        return (localState.year.toString().length == 4) ? 'fullYear': 'year';
      }
    });
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('field static object', () => {
    let result = shortcuts.rename(mock.renameDataBefore, {
      year: 'fullYear'
    });
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('field function array', () => {
    let result = shortcuts.rename(mock.renameDataBeforeArray, {
      year: (localState) => {
        return (localState.year.toString().length == 4) ? 'fullYear': 'year';
      }
    });
    expect(result).toEqual(mock.renameDataAfterArray);
  });

  it('field static array', () => {
    let result = shortcuts.rename(mock.renameDataBeforeArray, {
        year: 'fullYear',
    });
    expect(result).toEqual(mock.renameDataAfterArray);
  });
});