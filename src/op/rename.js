import action from './actions/rename';
import { apply } from './utils/apply';

export default config => apply(action(config));
