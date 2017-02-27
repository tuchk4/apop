import shortcuts from '../../lib/shortcuts';
import mock from '../../__mock__';

describe('update', () => {
  it('field function object', () => {
    const result = shortcuts.update(mock.updateDataBefore, {
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    });
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('field static object', () => {
    const result = shortcuts.update(mock.updateDataBefore, {
      year: mock.updateDataAfter.year,
      month: mock.updateDataAfter.month,
      day: mock.updateDataAfter.day,
    });
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('field function array', () => {
    const result = shortcuts.update(mock.updateDataBeforeArray, {
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    });
    expect(result).toEqual(mock.updateDataAfterArray);
  });

  it('field static array', () => {
    const additionalFields = {
      year: 2000,
      month: 1,
      day: 1,
    };
    const result = shortcuts.update(mock.updateDataBeforeArray, additionalFields);
    const trueResult = [
      { ...mock.updateDataAfterArray[0], ...additionalFields },
      { ...mock.updateDataAfterArray[1], ...additionalFields },
    ];
    expect(result).toEqual(trueResult);
  });
});
