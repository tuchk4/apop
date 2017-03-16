import rmk from '../lib';
import shortcuts from '../lib/shortcuts';

test('Update array index', () => {
  const formula = rmk(rmk.swap(1, 2));

  const result = formula(['foo', 'bar', 'baz']);
});
