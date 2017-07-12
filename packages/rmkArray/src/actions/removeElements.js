import removeByIndex from '../utils/removeByIndex';

const removeElements = (...args) =>
  originArr => {
    for(let element of args){
      const index = originArr.indexOf(element);
      if (index === undefined) continue;


      originArr = removeByIndex(index)(originArr);
    }
    return originArr;
  };

export default removeElements;
