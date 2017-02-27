import rmkActions from '../lib/actions';
import reduce from '../lib/utils/reduce';
import mock from '../__mock__';

describe('Reduce', () => {
  it('Object argument', () => {
    const result = reduce(mock.clearDataBefore, [rmkActions.clear()]);
    expect(result).toEqual(mock.clearDataAfter);
  });


  it('Array argument', () => {
    const result = reduce(mock.clearDataBeforeArray, [rmkActions.clear()]);
    expect(result).toEqual(mock.clearDataAfterArray);
  });
});
