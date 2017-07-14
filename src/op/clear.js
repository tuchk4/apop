import action from './actions/clear';
import { apply } from './utils/apply';

export default config => apply(action(config));
