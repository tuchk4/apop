/**
 * @memberof ArrayActions
 * @description Test
 * @param callback
 * @returns {function(*)}
 */
const map = callback => {
  return originArr => {
    try {
      return originArr.map(callback);
    } catch (err) {
      console.log('err', err);
    }
  };
};

export default map;
