import rmk from '../lib';
import shortcuts from '../lib/shortcuts';

test('Update array index', () => {
  const formula = rmk(rmk.replace(1, 'baz'));

  const result = formula(['foo', 'bar']);
});
