import ap from '../src/ap';
import op from '../src/op';

const before = Object.seal({
  id: 1,
  first_name: 'Stephen',
  last_name: 'Nelson',
  email: 'snelson0@yellowbook.com',
  gender: 'Male',
  ip_address: '74.191.108.58',
  city: 'Kapotnya',
  phrase: 'Universal 6th generation portal',
  date: new Date(Date.UTC(2001, 1, 1)),
  0: 0,
  1: 1,
  '-1': -1,
  emptyStr: '',
  null: null,
  undefined,
  nullArray: [null],
  undefinedArray: [undefined],
});

test('Clear object with config 1', () => {
  const formula = op.clear({
    nullValue: false,
    undefinedValue: false,
    emptyArray: false,
    emptyObject: false,
    emptyString: false,
  });

  const result = formula(before);
  expect(result).toMatchSnapshot();
});
test('Clear object with config 2', () => {
  const config = {
    nullValue: true,
    undefinedValue: true,
  };
  const formula = op.clear(config);

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Clear object with config 3', () => {
  const config = {
    emptyArray: true,
    emptyObject: true,
    emptyString: true,
  };
  const formula = op.clear(config);

  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Clear object', () => {
  const formula = op.clear();
  const result = formula(before);
  expect(result).toMatchSnapshot();
});

test('Clear array of objects', () => {
  const formula = ap(ap.map(op.clear()));

  const result = formula([before]);
  expect(result).toMatchSnapshot();

  const formula2 = ap(op.clear());
  const result2 = formula2([before]);
  expect(result2).toMatchSnapshot();
});

test('Clear remove undefined and null values', () => {
  const result = op.clear()(before);
  expect(result).toMatchSnapshot();
});
