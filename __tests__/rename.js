import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__';

describe('Rename Action', () => {
  it('Field function object', () => {
    const formula = rmk(rmkActions.rename({
      year: localState => (((localState.year.toString().length === 4) ? 'fullYear' : 'year')),
    }));
    const result = formula(mock.renameDataBefore);
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('Field static object', () => {
    const formula = rmk(rmkActions.rename({
      year: 'fullYear',
    }));
    const result = formula(mock.renameDataBefore);
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('Field function array', () => {
    const formula = rmk(rmkActions.rename({
      year: localState => (((localState.year.toString().length === 4) ? 'fullYear' : 'year')),
    }));
    const result = formula(mock.renameDataBeforeArray);
    expect(result).toEqual(mock.renameDataAfterArray);
  });

  it('Field static array', () => {
    const formula = rmk(rmkActions.rename({
      year: 'fullYear',
    }));
    const result = formula(mock.renameDataBeforeArray);
    expect(result).toEqual(mock.renameDataAfterArray);
  });
});
