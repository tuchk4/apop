import op from '../../../src/build/op';

const getActions = () => {
  return [
    op.toSnakeCase(),
    op.clear(),
    op.rename({
      key1: 'first',
      key2: 'second',
      key3: state => 'key-' + state.foo + state.bar,
    }),
    op.toCamelCase(),
    op.update({
      newField: 'newField',
    }),
  ];
};

export default getActions;
