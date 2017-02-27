import reduce from 'rmk/utils/reduce';

export default (...actions) => {
  return origin => reduce(origin, actions);
};