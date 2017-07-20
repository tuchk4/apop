/**
 * @typedef {Function} MiddlewareArrayFunction
 * @property {Array} Original Array
 * @return {Array} Transformed Array
 * @example
 *  // input data is Array
 * (config) => (data) => actionFn(config, data)
 * // return Array
 */

/**
 * @typedef {Function} MiddlewareStringFunction
 * @property {Array} Original Array
 * @return {String} Transformed String
 * @example
 *  // input data is Object
 * (config) => (data) => actionFn(config, data)
 * // return String
 */

/**
 * @typedef {Function} MiddlewareObjectFunction
 * @property {Object} Original Object
 * @return {Object} Transformed Object
 * @example
 * // input data is Object
 * (config) => (data) => actionFn(config, data)
 * // return Object
 */
