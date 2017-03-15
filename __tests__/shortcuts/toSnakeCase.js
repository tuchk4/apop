import shortcuts from '../../lib/shortcuts';
import { before, after } from '../toSnakeCase';

describe('toSnakeCase shortcut', () => {
  it('Transform to snake_case', () => {
    const result = shortcuts.toSnakeCase(before);
    expect(result).toEqual(after);
  });

  it('Transform array of objects to snake_case', () => {
    const result = shortcuts.toSnakeCase([before]);
    expect(result).toEqual([after]);
  });
});
