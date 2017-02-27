import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__';

describe('Clear', () => {
  it('Clear object', () => {
    const formula = rmk(rmkActions.clear());
    const result = formula(mock.clearDataBefore);
    expect(result).toEqual(mock.clearDataAfter);
  });


  it('Clear array of objects', () => {
    const formula = rmk(rmkActions.clear());
    const result = formula(mock.clearDataBeforeArray);
    expect(result).toEqual(mock.clearDataAfterArray);
  });
});
