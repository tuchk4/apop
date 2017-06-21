import rmk from '../lib';

const before = Object.seal({
  date: new Date(Date.UTC(2001, 11, 3)),
});

const misc = {
  year: 2001,
  month: 11,
  day: 3,
};

it('Field function object', () => {
  const formula = rmk(
    rmk.update({
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    })
  );

  const result = formula(before);

  expect(result).toMatchSnapshot();
});

test('Field static object', () => {
  const formula = rmk(
    rmk.update({
      year: misc.year,
      month: misc.month,
      day: misc.day,
    })
  );

  const result = formula(before);

  expect(result).toMatchSnapshot();
});

test('Field function array', () => {
  const formula = rmk(
    rmk.update({
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    })
  );

  const result = formula([before]);

  expect(result).toMatchSnapshot();
});

test('Field static array', () => {
  const additionalFields = {
    year: 2000,
    month: 1,
    day: 1,
  };

  const formula = rmk(rmk.update(additionalFields));
  const result = formula([before]);

  expect(result).toMatchSnapshot();
});

// --

test('Update shortcut: Field function object', () => {
  const result = rmk.update({
    year: localState => localState.date.getFullYear(),
    month: localState => localState.date.getMonth(),
    day: localState => localState.date.getDate(),
  })(before);

  expect(result).toMatchSnapshot();
});

test('Update shortcut: Field static object', () => {
  const result = rmk.update({
    year: misc.year,
    month: misc.month,
    day: misc.day,
  })(before);

  expect(result).toMatchSnapshot();
});

test('Update shortcut: Field function array', () => {
  const result = rmk.update({
    year: localState => localState.date.getFullYear(),
    month: localState => localState.date.getMonth(),
    day: localState => localState.date.getDate(),
  })([before]);

  expect(result).toMatchSnapshot();
});

test('Update shortcut: Field static array', () => {
  const additionalFields = {
    year: 2000,
    month: 1,
    day: 1,
  };
  const result = rmk.update(additionalFields)([before]);

  expect(result).toMatchSnapshot();
});
