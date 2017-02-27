import shortcuts from 'rmk/shortcuts';
import mock from '../../__mock__';

describe('update', () => {
  it('field function object', () => {
    let result = shortcuts.update(mock.updateDataBefore, {
      year: (localState) => {
        return localState.date.getFullYear();
      },
      month: (localState) => {
        return localState.date.getMonth();
      },
      day: (localState) => {
        return localState.date.getDate();
      }
    });
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('field static object', () => {
    let result = shortcuts.update(mock.updateDataBefore, {
      year: mock.updateDataAfter.year,
      month: mock.updateDataAfter.month,
      day: mock.updateDataAfter.day,
    });
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('field function array', () => {
    let result = shortcuts.update(mock.updateDataBeforeArray, {
      year: (localState) => {
        return localState.date.getFullYear();
      },
      month: (localState) => {
        return localState.date.getMonth();
      },
      day: (localState) => {
        return localState.date.getDate();
      }
    });
    expect(result).toEqual(mock.updateDataAfterArray);
  });

  it('field static array', () => {
    let additionalFields = {
      year: 2000,
      month: 1,
      day: 1,
    };
    let result = shortcuts.update(mock.updateDataBeforeArray, additionalFields);
    let trueResult = [{...mock.updateDataAfterArray[0], ...additionalFields}, {...mock.updateDataAfterArray[1], ...additionalFields}];
    expect(result).toEqual(trueResult);
  });
});
