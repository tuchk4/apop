import rmk from '../../../packages/rmk/src/rmk';

const getActions = () => {
  return [
    rmk.toSnakeCase(),
    rmk.clear(),
    rmk.rename({
      key1: 'first',
      key2: 'second',
      key3: state => 'key-' + state.foo + state.bar,
    }),
    rmk.toCamelCase(),
    rmk.update({
      newField: 'newField'
    })
  ]
};

export default getActions;
