import ap from '../../src/build/ap';
import op from '../../src/build/op';

const before = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]];
const beforeObject = [{ id: 1 }, { id: 2 }, { id: 3 }];

test('ap.recursive.map', () => {
  const formula = ap.recursive(ap.map(i => i + 1));

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('ap.map', () => {
  const formula = ap.map(i => {
    return i + 1;
  });

  const result = formula(before);

  expect(result).toMatchSnapshot();
});
test('ap.map 1', () => {
  const formula = ap(
    op.update({
      id: state => state.id + 1,
    }),
    op.update({
      id: state => state.id + 1,
    })
  );

  const result = formula(beforeObject);

  expect(result).toMatchSnapshot();
});

test('ap.map 2', () => {
  const formula = ap(
    ap.map(
      op.update({
        id: state => state.id + 1,
      }),
      op.update({
        id: state => state.id + 1,
      })
    )
  );

  const result = formula(beforeObject);

  expect(result).toMatchSnapshot();
});
