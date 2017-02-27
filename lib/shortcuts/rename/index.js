import rmk from '../../';
import rmkActions from '../../actions';

/**
 * Rename state by config
 *
 * @memberof shortcuts
 * @param {Object} origin Origin object
 * @param {Object} config Configuration with struct {field: fn(state)} or {field:value}
 * @returns {Function} Returns transformed object with snake_case keys
 * @see {@link ../actions#actions.rename Original method}
 * @example
 *
 * import update from 'rmk/shortcuts/update';
 *
 * let data = {foo:1}
 * rename(data, {
 *    foo: 'bar'
 * })
 * // => {bar:1}
 *
 * let data = [{foo:1}, {foo:2}]
 * update(data, {
 *    foo: 'bar'
 * })
 * // =>  [{bar:1}, {bar:2}]
 *
 *
 * let data = {year: 2001}
 * rename(data, {
 *     year: (state) => {
 *       return (state.year.toString().lentgth === 4) ? 'fullYear' : 'year';
 *     }
 * })
 * // => {fullYear: 2001}
 *
 * let data = [{year: 2001}, {year: 2002}]
 * rename(data, {
 *     year: (state) => {
 *       return (state.year.toString().lentgth === 4) ? 'fullYear' : 'year';
 *     }
 * })
 * // => [{fullYear: 2001}, {fullYear: 2002}]
 *
 */
export default (origin, config) => rmk(rmkActions.rename(config))(origin);
