const getField = index => {
  switch (index) {
    case 1: return 1;
    case 2: return '2';
    case 3: return {
      foo: 1,
      bar: 2
    };
    case 4: return new Date();
    case 5: return {};
    case 6: return [];
    case 7: return null;
    case 8: return undefined;
    case 9: return '';
    case 10: return 0;
    case 11: return -1;
    case 12: return [null, undefined, -1, 0];
    case 13: return 'Hello';
    case 14: return [{foo: 'bar'}, {foo: 'baz'}];
    case 15: return () => {};
    case 16: return new Map();
    case 17: return new WeakMap();
    case 18: return new Set();
    case 19: return new WeakSet();
    case 20: return;
  }
};

const MAX = 20;

const generateData = size => {
  const threshold = size < MAX ? size : MAX;
  let j = 0;

  let data = {};
  for (let i = 0; i < size; i++) {
    data[`key${i}`] = getField(j++);

    if (j === threshold) {
      j = 0;
    }
  }

  return data;
};

export default generateData;
