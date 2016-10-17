import configureStoreProd from './configureStore.prod.js';
import configureStoreDev from './configureStore.dev.js';

export default process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
