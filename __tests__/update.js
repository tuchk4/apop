import rmk from '../lib';
import shortcuts from '../lib/shortcuts';

const before = {
  date: new Date(2001, 11, 3),
};

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

test('Update shorcut: Field function object', () => {
  const result = shortcuts.update(before, {
    year: localState => localState.date.getFullYear(),
    month: localState => localState.date.getMonth(),
    day: localState => localState.date.getDate(),
  });

  expect(result).toMatchSnapshot();
});

test('Update shorcut: Field static object', () => {
  const result = shortcuts.update(before, {
    year: misc.year,
    month: misc.month,
    day: misc.day,
  });

  expect(result).toMatchSnapshot();
});

test('Update shorcut: Field function array', () => {
  const result = shortcuts.update([before], {
    year: localState => localState.date.getFullYear(),
    month: localState => localState.date.getMonth(),
    day: localState => localState.date.getDate(),
  });

  expect(result).toMatchSnapshot();
});

test('Update shorcut: Field static array', () => {
  const additionalFields = {
    year: 2000,
    month: 1,
    day: 1,
  };
  const result = shortcuts.update([before], additionalFields);

  expect(result).toMatchSnapshot();
});
