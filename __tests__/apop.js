import ap from '../src/ap';
import op from '../src/op';

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

it('First Global Test', () => {
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
