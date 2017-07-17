/**
 * @memberof ArrayActions
 * @description Test
 * @param separator
 * @returns {function(*): (string|*)}
 */
const join = (separator = ', ') => {
  return originArr => originArr.join(separator);
};

export default join;
