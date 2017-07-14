import action from './actions/each';
import { apply } from './utils/apply';

export default config => apply(action(config));
