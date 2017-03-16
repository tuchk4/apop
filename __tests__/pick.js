import rmk from '../lib';
import shortcuts from '../lib/shortcuts';

const data = {
  asObject: {
    id: 1,
    name: 'abc',
    createDate: '01.01.1970',
    isActive: false,
  },
  asObjectWithoutCreateDate: {
    id: 1,
    name: 'abc',
    isActive: false,
  },
};

test('Data as object, config as array', () => {
  const formula = rmk(rmk.pick(['id', 'name']));
  const result = formula(data.asObject);

  expect(result).toMatchSnapshot();
});

test('Data as array,  config as array', () => {
  const formula = rmk(rmk.pick(['id', 'name']));
  const result = formula([data.asObject, data.asObject]);

  expect(result).toMatchSnapshot();
});

test('Data as object, config as object', () => {
  const formula = rmk(
    rmk.pick({
      id: 'key',
      name: 'value',
    })
  );

  const result = formula(data.asObject);

  expect(result).toMatchSnapshot();
});

test('Data as array, config as object', () => {
  const formula = rmk(
    rmk.pick({
      id: 'key',
      name: 'value',
    })
  );

  const result = formula([data.asObject, data.asObject]);

  expect(result).toMatchSnapshot();
});

test('Data as object, config as object with calculate', () => {
  const formula = rmk(
    rmk.pick({
      id: 'key',
      name: 'value',
      isEmptyDate: localState => localState.createDate.length === 0,
    })
  );

  const result = formula(data.asObject);

  expect(result).toMatchSnapshot();
});

test('Data as array, config as object with calculate', () => {
  const formula = rmk(
    rmk.pick({
      id: 'key',
      name: 'value',
      isEmptyDate: localState => !localState.createDate,
    })
  );

  const result = formula([data.asObject, data.asObjectWithoutCreateDate]);

  expect(result).toMatchSnapshot();
});

test('Pick shorcut: Data as object, config as array', () => {
  const result = shortcuts.pick(data.asObject, ['id', 'name']);
  expect(result).toMatchSnapshot();
});

test('Pick shorcut: Data as array,  config as array', () => {
  const result = shortcuts.pick([data.asObject], ['id', 'name']);
  expect(result).toMatchSnapshot();
});

test('Data as object, config as object', () => {
  const result = shortcuts.pick(data.asObject, {
    id: 'key',
    name: 'value',
  });

  expect(result).toMatchSnapshot();
});

test('Pick shorcut: Data as array, config as object', () => {
  const result = shortcuts.pick([data.asObject], {
    id: 'key',
    name: 'value',
  });
  expect(result).toMatchSnapshot();
});

test('Pick shorcut: Data as object, config as object with calculate', () => {
  const result = shortcuts.pick(data.asObject, {
    id: 'key',
    name: 'value',
    isEmptyDate: localState => localState.createDate.length === 0,
  });

  expect(result).toMatchSnapshot();
});

test('Pick shorcut: Data as array, config as object with calculate', () => {
  const result = shortcuts.pick([data.asObject], {
    id: 'key',
    name: 'value',
    isEmptyDate: localState => !localState.createDate,
  });
  expect(result).toMatchSnapshot();
});
