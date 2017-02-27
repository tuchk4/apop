import flow from 'lodash/flow';

/**
 * Parse object fields
 * @memberof utils
 * @param {Object} origin Origin object
 * @param {Array} actions Array of transform actions
 *
 * @returns {Object} Transformed object by actions
 */
export default (origin, actions) => flow(actions)(origin);
