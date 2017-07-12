import removeElement from './removeElements';

const remove = (...args) => {
  return originArr => {
    let elements = [];
    for(let index of args) {
      elements.push(originArr[index]);
    }
    return removeElement(...elements)(originArr);
  };
};


export default remove;
