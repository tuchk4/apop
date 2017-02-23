import rmkActions from '~/actions';
import reduce from '~/utils/reduce';
import mock from '../__mock__';

describe('Reduce', () => {
  it('Object argument', () => {
    let result = reduce(mock.clearDataBefore, [rmkActions.clear()]);
    expect(result).toEqual(mock.clearDataAfter);
  });


  it('Array argument', () => {
    let result = reduce(mock.clearDataBeforeArray, [rmkActions.clear()]);
    expect(result).toEqual(mock.clearDataAfterArray);
  });

  it('Wrong input arguments', () => {
    expect(function() {
      reduce(undefined, [rmkActions.clear()])
    }).toThrow(new Error("Wrong input arguments"));
  });
});
