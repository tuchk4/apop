import ap from '../../src/build/ap';
import op from '../../src/build/op';

const before = Object.seal({
  date: new Date(Date.UTC(2001, 11, 3)),
});

const misc = {
  year: 2001,
  month: 11,
  day: 3,
};

it('Field function object', () => {
  const formula = op(
    op.add({
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    })
  );

  const result = formula(before);

  expect(result).toMatchSnapshot();
});

test('Field static object', () => {
  const formula = op(
    op.add({
      year: misc.year,
      month: misc.month,
      day: misc.day,
    })
  );

  const result = formula(before);

  expect(result).toMatchSnapshot();
});

test('Field function array', () => {
  const formula = ap(
    op.add({
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

  const formula = ap(op.update(additionalFields));
  const result = formula([before]);

  expect(result).toMatchSnapshot();
});

// --

test('Update shortcut: Field function object', () => {
  const result = op.add({
    year: localState => localState.date.getFullYear(),
    month: localState => localState.date.getMonth(),
    day: localState => localState.date.getDate(),
  })(before);

  expect(result).toMatchSnapshot();
});

test('Update shortcut: Field static object', () => {
  const result = op.add({
    year: misc.year,
    month: misc.month,
    day: misc.day,
  })(before);

  expect(result).toMatchSnapshot();
});

test('Update shortcut: Field function array', () => {
  const result = ap(
    op.add({
      year: localState => localState.date.getFullYear(),
      month: localState => localState.date.getMonth(),
      day: localState => localState.date.getDate(),
    })
  )([before]);

  expect(result).toMatchSnapshot();
});

test('Update shortcut: Field static array', () => {
  const additionalFields = {
    year: 2000,
    month: 1,
    day: 1,
  };
  const result = ap(op.add(additionalFields))([before]);

  expect(result).toMatchSnapshot();
});

test('update nested', () => {
  const formula = op(
    op.rename({
      a: 'A',
      b: 'B',
    }),
    op.update({
      A: v => v + 1,
      B: op.rename({
        c: 'C',
      }),
    })
  );

  const result = formula({
    a: 1,
    b: {
      c: 2,
    },
  });

  expect(result).toMatchSnapshot();
});
