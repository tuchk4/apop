import rmk from '../../index';
import rmkActions from './../../actions';

export default (...params) => {
  return rmk(rmkActions.toSnakeCase())(...params);
}