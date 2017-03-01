import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__';

describe('Pick action', () => {
  it('Data as object, config as array', () => {
    const formula = rmk(rmkActions.pick(['id', 'name']));
    const result = formula(mock.pickDataBefore1);
    expect(result).toEqual(mock.pickDataAfter1);
  });

  it('Data as array,  config as array', () => {
    const formula = rmk(rmkActions.pick(['id', 'name']));
    const result = formula(mock.pickDataBeforeArray1);
    expect(result).toEqual(mock.pickDataAfterArray1);
  });

  it('Data as object, config as object', () => {
    const formula = rmk(rmkActions.pick({
      id: 'key',
      name: 'value',
    }));
    const result = formula(mock.pickDataBefore2);
    expect(result).toEqual(mock.pickDataAfter2);
  });

  it('Data as array, config as object', () => {
    const formula = rmk(rmkActions.pick({
      id: 'key',
      name: 'value',
    }));
    const result = formula(mock.pickDataBeforeArray2);
    expect(result).toEqual(mock.pickDataAfterArray2);
  });

  it('Data as object, config as object with calculate', () => {
    const formula = rmk(rmkActions.pick({
      id: 'key',
      name: 'value',
      isEmptyDate: localState => localState.createDate.length === 0,
    }));
    const result = formula(mock.pickDataBefore3);
    expect(result).toEqual(mock.pickDataAfter3);
  });

  it('Data as array, config as object with calculate', () => {
    const formula = rmk(rmkActions.pick({
      id: 'key',
      name: 'value',
      isEmptyDate: localState => !localState.createDate,
    }));
    const result = formula(mock.pickDataBeforeArray3);
    expect(result).toEqual(mock.pickDataAfterArray3);
  });
});
