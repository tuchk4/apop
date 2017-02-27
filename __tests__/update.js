import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__';

describe('update', () => {
  it('field function object', () => {
    const formula = rmk(rmkActions.update({
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    }));
    const result = formula(mock.updateDataBefore);
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('field static object', () => {
    const formula = rmk(rmkActions.update({
      year: mock.updateDataAfter.year,
      month: mock.updateDataAfter.month,
      day: mock.updateDataAfter.day,
    }));
    const result = formula(mock.updateDataBefore);
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('field function array', () => {
    const formula = rmk(rmkActions.update({
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    }));
    const result = formula(mock.updateDataBeforeArray);
    expect(result).toEqual(mock.updateDataAfterArray);
  });

  it('field static array', () => {
    const additionalFields = {
      year: 2000,
      month: 1,
      day: 1,
    };
    const formula = rmk(rmkActions.update(additionalFields));
    const result = formula(mock.updateDataBeforeArray);
    const trueResult = [
      { ...mock.updateDataAfterArray[0], ...additionalFields },
      { ...mock.updateDataAfterArray[1], ...additionalFields },
    ];
    expect(result).toEqual(trueResult);
  });
});
