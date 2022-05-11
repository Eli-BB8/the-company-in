import initializeExpress from './express/app';
import { initializeMongo } from './mongo/initialize';

/**
 * The main function.
 * Calls all the initialization functions.
 */
const main = async () => {
    await initializeMongo();
    initializeExpress();
};

main().catch((err) => {
    console.log('Unknown error', err.message);
});
