import ap from '../src/build/ap';
import op from '../src/build/op';
import rename from '../src/build/op/rename';
import update from '../src/build/op/update';
import add from '../src/build/op/add';
import toCamelCase from '../src/build/op/toCamelCase';

import swap from '../src/build/ap/swap';
import remove from '../src/build/ap/remove';
import filter from '../src/build/ap/filter';
import map from '../src/build/ap/map';
import sort from '../src/build/ap/sort';

import recursive from '../src/build/op/recursive';

var beforeArray = [];
for (let i = 15; i < 30; i++) {
  beforeArray.push({
    index: i,
    date: new Date(Date.UTC(2001, 11, i, 0, 0, 0)),
  });
}
for (let i = 1; i <= 12; i++) {
  beforeArray.push({
    index: i,
    date: new Date(Date.UTC(2001, i, 3, 0, 0, 0)),
  });
}

it('Complex Test 1', () => {
  const objectFormula = op(
    op.rename({ index: 'id' }),
    op.add({
      sort: state => state.id * 3 + state.id * 2 + state.id,
      case_detect: true,
    }),
    op.recursive(op.toCamelCase())
  );

  const arrayFormula = ap(
    ap.swap(3, 4),
    ap.swap(5, 6),
    ap.swap(4, 5),
    ap.remove(0, 1),
    ap.filter(item => item.index % 2),
    ap.remove(4, 5, 6, 7),
    op.rename({ date: 'birth_date' }),
    ap.map(objectFormula),
    ap.sort((a, b) => {
      if (a.sort < b.sort) return 1;
      if (a.sort > b.sort) return -1;
      return 0;
    })
  );

  const result = arrayFormula(beforeArray);

  expect(result).toMatchSnapshot();
});

it('Complex Test 2', () => {
  const objectFormula = op(
    rename({ index: 'id' }),
    add({
      sort: state => state.id * 3 + state.id * 2 + state.id,
      case_detect: true,
    }),
    recursive(toCamelCase())
  );
  const arrayFormula = ap(
    swap(3, 4),
    swap(5, 6),
    swap(4, 5),
    remove(0, 1),
    filter(item => item.index % 2),
    remove(4, 5, 6, 7),
    rename({ date: 'birth_date' }),
    map(objectFormula),
    sort((a, b) => {
      if (a.sort < b.sort) return 1;
      if (a.sort > b.sort) return -1;
      return 0;
    })
  );
  const result = arrayFormula(beforeArray);

  expect(result).toMatchSnapshot();
});
