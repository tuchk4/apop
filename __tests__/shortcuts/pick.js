import rmkShortcuts from '../../lib/shortcuts';
import mock from '../../__mock__';

describe('Pick shortcut', () => {
  it('Data as object, config as array', () => {
    const result = rmkShortcuts.pick(mock.pickDataBefore1, ['id', 'name']);

    expect(result).toEqual(mock.pickDataAfter1);
  });

  it('Data as array,  config as array', () => {
    const result = rmkShortcuts.pick(mock.pickDataBeforeArray1, ['id', 'name']);

    expect(result).toEqual(mock.pickDataAfterArray1);
  });

  it('Data as object, config as object', () => {
    const result = rmkShortcuts.pick(mock.pickDataBefore2, {
      id: 'key',
      name: 'value',
    });
    expect(result).toEqual(mock.pickDataAfter2);
  });

  it('Data as array, config as object', () => {
    const result = rmkShortcuts.pick(mock.pickDataBeforeArray2, {
      id: 'key',
      name: 'value',
    });
    expect(result).toEqual(mock.pickDataAfterArray2);
  });

  it('Data as object, config as object with calculate', () => {
    const result = rmkShortcuts.pick(mock.pickDataBefore3, {
      id: 'key',
      name: 'value',
      isEmptyDate: localState => localState.createDate.length === 0,
    });
    expect(result).toEqual(mock.pickDataAfter3);
  });

  it('Data as array, config as object with calculate', () => {
    const result = rmkShortcuts.pick(mock.pickDataBeforeArray3, {
      id: 'key',
      name: 'value',
      isEmptyDate: localState => !localState.createDate,
    });
    expect(result).toEqual(mock.pickDataAfterArray3);
  });
});
