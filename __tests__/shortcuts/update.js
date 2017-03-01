import shortcuts from '../../lib/shortcuts';
import mock from '../../__mock__';

describe('Update shortcut', () => {
  it('Field function object', () => {
    const result = shortcuts.update(mock.updateDataBefore, {
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    });
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('Field static object', () => {
    const result = shortcuts.update(mock.updateDataBefore, {
      year: mock.updateDataAfter.year,
      month: mock.updateDataAfter.month,
      day: mock.updateDataAfter.day,
    });
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('Field function array', () => {
    const result = shortcuts.update(mock.updateDataBeforeArray, {
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    });
    expect(result).toEqual(mock.updateDataAfterArray);
  });

  it('Field static array', () => {
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
