import rmkShortcuts from '../../lib/shortcuts';
import * as mock from '../pick';

describe('Pick shortcut', () => {
  it('Data as object, config as array', () => {
    const result = rmkShortcuts.pick(mock.before1, ['id', 'name']);

    expect(result).toEqual(mock.after1);
  });

  it('Data as array,  config as array', () => {
    const result = rmkShortcuts.pick(mock.beforeArray1, ['id', 'name']);

    expect(result).toEqual(mock.afterArray1);
  });

  it('Data as object, config as object', () => {
    const result = rmkShortcuts.pick(mock.before2, {
      id: 'key',
      name: 'value',
    });
    expect(result).toEqual(mock.after2);
  });

  it('Data as array, config as object', () => {
    const result = rmkShortcuts.pick(mock.beforeArray2, {
      id: 'key',
      name: 'value',
    });
    expect(result).toEqual(mock.afterArray2);
  });

  it('Data as object, config as object with calculate', () => {
    const result = rmkShortcuts.pick(mock.before3, {
      id: 'key',
      name: 'value',
      isEmptyDate: localState => localState.createDate.length === 0,
    });
    expect(result).toEqual(mock.after3);
  });

  it('Data as array, config as object with calculate', () => {
    const result = rmkShortcuts.pick(mock.beforeArray3, {
      id: 'key',
      name: 'value',
      isEmptyDate: localState => !localState.createDate,
    });
    expect(result).toEqual(mock.afterArray3);
  });
});
