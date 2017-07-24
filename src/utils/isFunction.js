const isFunction = entity => {
  return entity && entity.constructor === Function;
};
export default isFunction;
