
const map = (...args) =>
  originArr => {
    let callback = args[0];
    console.log('callback', callback);
    try {
      return originArr.map(callback);
    } catch (err) {console.log('err', err);

    }

  };

export default map;
