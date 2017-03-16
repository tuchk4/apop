import rmk from '../lib';
import shortcuts from '../lib/shortcuts';

const before = {
  year: 2001,
};

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
  const result = shortcuts.rename(before, {
    year: localState =>
      localState.year.toString().length === 4 ? 'fullYear' : 'year',
  });

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field static object', () => {
  const result = shortcuts.rename(before, {
    year: 'fullYear',
  });

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field function array', () => {
  const result = shortcuts.rename([before], {
    year: localState =>
      localState.year.toString().length === 4 ? 'fullYear' : 'year',
  });

  expect(result).toMatchSnapshot();
});

test('Rename shorctu: Field static array', () => {
  const result = shortcuts.rename([before], {
    year: 'fullYear',
  });

  expect(result).toMatchSnapshot();
});
