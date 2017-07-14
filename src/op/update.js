import action from './actions/update';
import { apply } from './utils/apply';

export default config => apply(action(config));
