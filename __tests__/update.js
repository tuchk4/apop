import rmk from '~/';
import rmkActions from '~/actions';
import mock from '../__mock__';

describe('update', () => {

  it('field function object', () => {
    let formula = rmk(rmkActions.update({
      year: (localState) => {
        return localState.date.getFullYear();
      },
      month: (localState) => {
        return localState.date.getMonth();
      },
      day: (localState) => {
        return localState.date.getDate();
      }
    }));
    let result = formula(mock.updateDataBefore);
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('field static object', () => {
    let formula = rmk(rmkActions.update({
      year: mock.updateDataAfter.year,
      month: mock.updateDataAfter.month,
      day: mock.updateDataAfter.day,
    }));
    let result = formula(mock.updateDataBefore);
    expect(result).toEqual(mock.updateDataAfter);
  });

  it('field function array', () => {
    let formula = rmk(rmkActions.update({
      year: (localState) => {
        return localState.date.getFullYear();
      },
      month: (localState) => {
        return localState.date.getMonth();
      },
      day: (localState) => {
        return localState.date.getDate();
      }
    }));
    let result = formula(mock.updateDataBeforeArray);
    expect(result).toEqual(mock.updateDataAfterArray);
  });

  it('field static array', () => {
    let additionalFields = {
      year: 2000,
      month: 1,
      day: 1,
    };
    let formula = rmk(rmkActions.update(additionalFields));
    let result = formula(mock.updateDataBeforeArray);
    let trueResult = [{...mock.updateDataAfterArray[0], ...additionalFields}, {...mock.updateDataAfterArray[1], ...additionalFields}];
    expect(result).toEqual(trueResult);
  });
});