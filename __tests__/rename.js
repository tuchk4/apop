import ap from '../src/ap';
import op from '../src/op';

const before = Object.seal({
  year: 2001,
});

test('Field function object', () => {
  const formula = op(
    op.rename({
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    })
  );

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Field static object', () => {
  const formula = op(
    op.rename({
      year: 'fullYear',
    })
  );

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Field function array', () => {
  const formula = ap(
    op.rename({
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    })
  );

  const result = formula([before]);
  expect(result).toMatchSnapshot();
});

test('Field static array', () => {
  const formula = ap(
    op.rename({
      year: 'fullYear',
    })
  );

  const result = formula([before]);
  expect(result).toMatchSnapshot();
});

// ---

test('Rename shorctu: Field function object', () => {
  const result = op.rename({
    year: localState =>
      localState.year.toString().length === 4 ? 'fullYear' : 'year',
  })(before);

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field static object', () => {
  const result = op.rename({
    year: 'fullYear',
  })(before);

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field function array', () => {
  const result = ap(
    op.rename({
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    })
  )([before]);

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field static array', () => {
  const result = ap(
    op.rename({
      year: 'fullYear',
    })
  )([before]);

  expect(result).toMatchSnapshot();
});
