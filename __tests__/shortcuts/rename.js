import shortcuts from '../../lib/shortcuts';

import { before, after } from '../rename';

describe('Rename shortcut', () => {
  it('Field function object', () => {
    const result = shortcuts.rename(before, {
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    });
    expect(result).toEqual(after);
  });

  it('Field static object', () => {
    const result = shortcuts.rename(before, {
      year: 'fullYear',
    });
    expect(result).toEqual(after);
  });

  it('Field function array', () => {
    const result = shortcuts.rename([before], {
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    });
    expect(result).toEqual([after]);
  });

  it('Field static array', () => {
    const result = shortcuts.rename([before], {
      year: 'fullYear',
    });
    expect(result).toEqual([after]);
  });
});
