import ap from '../src/build/ap';
import op from '../src/build/op';
import apop from '../src/build/apop';
import rename from '../src/build/op/rename';
import update from '../src/build/op/update';
import toCamelCase from '../src/build/op/recursive/toCamelCase';

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
  console.log('ap.splice(1, 2),', ap.splice(2, 1)([1, 2, 3, 4, 5]));
  const objectFormula = op(
    op.rename({ index: 'id' }),
    op.update({
      sort: state => state.id * 3 + state.id * 2 + state.id,
      case_detect: true,
    }),
    op.recursive.toCamelCase()
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
    ap.sort('sort', 'desc')
  );

  const result = arrayFormula(beforeArray);

  expect(result).toMatchSnapshot();
});

it('Complex Test 2', () => {
  const objectFormula = op(
    rename({ index: 'id' }),
    update({
      sort: state => state.id * 3 + state.id * 2 + state.id,
      case_detect: true,
    }),
    toCamelCase()
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
    sort('sort', 'desc')
  );
  const result = arrayFormula(beforeArray);

  expect(result).toMatchSnapshot();
});

it('Complex Test 3', () => {
  const objectFormula = apop(
    apop.rename({ index: 'id' }),
    apop.update({
      sort: state => state.id * 3 + state.id * 2 + state.id,
      case_detect: true,
    }),
    recursive.toCamelCase()
  );

  const result = objectFormula(beforeArray);

  expect(result).toMatchSnapshot();
});
