import reduce from '~/utils/reduce';

export default (...actions) => {
  return origin => reduce(origin, actions);
};