import shortcuts from '../../lib/shortcuts';
import {before, after} from '../toCameCase';

describe('toCamelCase shortcut', () => {
  it('Transform to camelCase', () => {
    const result = shortcuts.toCamelCase(before);
    expect(result).toEqual(after);
  });

  it('Transform array of objects to snake_case', () => {
    const result = shortcuts.toCamelCase([before]);
    expect(result).toEqual([after]);
  });
});
