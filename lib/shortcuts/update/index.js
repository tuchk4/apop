import rmk from '../../';
import rmkActions from '../../actions';

/**
 * Update state by config
 *
 * @memberof shortcuts
 * @param {Object} origin Origin object
 * @param {Object} config Configuration with struct {field: fn(state)} or {field:value}
 * @returns {Function} Returns transformed object with snake_case keys
 * @see {@link ../actions#actions.update Original method}
 * @example
 *
 * import update from 'rmk/shortcuts/update';
 *
 * let data = {foo:1}
 * update(data, {
 *    bar: 3
 * })
 * // => {foo:1, bar:3}
 *
 * let data = [{foo:1}, {foo:2}]
 * update(data, {
 *    bar: 3
 * })
 * // =>  [{foo:1, bar:3}, {foo:2, bar:3}]
 *
 *
 * let data = {date: new Date(2001)}
 * update(data, {
 *     year: (state) => {
 *       return state.date.getFullYear()
 *     }
 * })
 * // => {date: new Date(2001), year: 2001}
 *
 * let data = [{date: new Date(2001)}, {date: new Date(2002)}]
 * update(data, {
 *     year: (state) => {
 *       return state.date.getFullYear()
 *     }
 * })
 * // => [{date: new Date(2001), year: 2001}, {date: new Date(2002), year: 2002}]
 *
 */
export default (origin, config) => rmk(rmkActions.update(config))(origin);
