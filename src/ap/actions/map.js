const map = function(callback) {
  console.log('ap.map init');
  return function(originArr) {
    console.log('ap.map run');
    try {
      return originArr.map(callback);
    } catch (err) {
      console.log('err', err);
    }
  };
};

export default map;
