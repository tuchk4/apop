import shortcuts from '../../lib/shortcuts';
import {before, after} from '../update';

describe('Update shortcut', () => {
  it('Field function object', () => {
    const result = shortcuts.update(before, {
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    });
    expect(result).toEqual(after);
  });

  it('Field static object', () => {
    const result = shortcuts.update(before, {
      year: after.year,
      month: after.month,
      day: after.day,
    });
    expect(result).toEqual(after);
  });

  it('Field function array', () => {
    const result = shortcuts.update([before], {
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    });
    expect(result).toEqual([after]);
  });

  it('Field static array', () => {
    const additionalFields = {
      year: 2000,
      month: 1,
      day: 1,
    };
    const result = shortcuts.update(
      [before],
      additionalFields
    );
    const trueResult = [
      { ...after, ...additionalFields },
    ];
    expect(result).toEqual(trueResult);
  });
});
