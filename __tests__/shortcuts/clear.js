import shortcuts from '../../lib/shortcuts';
import { before, after } from '../clear';

describe('Clear shortcut', () => {
  it('Clear remove undefined and null values', () => {
    const result = shortcuts.clear(before);
    expect(result).toEqual(after);
  });

  it('Clear array of objects', () => {
    const result = shortcuts.clear([before]);
    expect(result).toEqual([after]);
  });
});
