import reduce from '../utils/reduce';

export default (...actions) => origin => reduce(origin, actions);
