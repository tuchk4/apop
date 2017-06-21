import rmk from '../dist/rmk';

const before = Object.seal({
  year: 2001,
});

test('Field function object', () => {
  const formula = rmk(
    rmk.rename({
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    })
  );

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Field static object', () => {
  const formula = rmk(
    rmk.rename({
      year: 'fullYear',
    })
  );

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Field function array', () => {
  const formula = rmk(
    rmk.rename({
      year: localState =>
        localState.year.toString().length === 4 ? 'fullYear' : 'year',
    })
  );

  const result = formula([before]);
  expect(result).toMatchSnapshot();
});

test('Field static array', () => {
  const formula = rmk(
    rmk.rename({
      year: 'fullYear',
    })
  );

  const result = formula([before]);
  expect(result).toMatchSnapshot();
});

// ---

test('Rename shorctu: Field function object', () => {
  const result = rmk.rename({
    year: localState =>
      localState.year.toString().length === 4 ? 'fullYear' : 'year',
  })(before);

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field static object', () => {
  const result = rmk.rename({
    year: 'fullYear',
  })(before);

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field function array', () => {
  const result = rmk.rename({
    year: localState =>
      localState.year.toString().length === 4 ? 'fullYear' : 'year',
  })([before]);

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field static array', () => {
  const result = rmk.rename({
    year: 'fullYear',
  })([before]);

  expect(result).toMatchSnapshot();
});
