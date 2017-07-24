import flow from '../flow';

const apply = (...actions) => flow(actions);
export default apply;
