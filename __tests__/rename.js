import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__';

describe('rename', () => {

  it('field function object', () => {
    let formula = rmk(rmkActions.rename({
      year: (localState) => {
        return (localState.year.toString().length == 4) ? 'fullYear': 'year';
      }
    }));
    let result = formula(mock.renameDataBefore);
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('field static object', () => {
    let formula = rmk(rmkActions.rename({
      year: 'fullYear'
    }));
    let result = formula(mock.renameDataBefore);
    expect(result).toEqual(mock.renameDataAfter);
  });

  it('field function array', () => {
    let formula = rmk(rmkActions.rename({
      year: (localState) => {
        return (localState.year.toString().length == 4) ? 'fullYear': 'year';
      }
    }));
    let result = formula(mock.renameDataBeforeArray);
    expect(result).toEqual(mock.renameDataAfterArray);
  });

  it('field static array', () => {
    let formula = rmk(rmkActions.rename({
        year: 'fullYear',
    }));
    let result = formula(mock.renameDataBeforeArray);
    expect(result).toEqual(mock.renameDataAfterArray);
  });
});