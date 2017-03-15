import rmk from '../../../lib';

const getActions = () => {
  return [
    rmk.clear(),
    rmk.rename({
      key1: 'first',
      key2: 'second',
      key3: state => 'key-' + state.foo + state.bar,
    }),
    rmk.toSnakeCase(),
    rmk.update(state => {
      return {
        ...state,
        newField: 'newField'
      }
    })
  ]
};

export default getActions;
