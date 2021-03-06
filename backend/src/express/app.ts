import * as express from 'express';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import route from './routes/company';
import config from '../config/index';
import { errorMiddleware } from './error';
import * as cors from 'cors';

require('dotenv').config();

const { port } = config.server || 6060;

/**
 * Initializing the express server
 */
export default () => {
    const app = express();

    app.use(helmet());
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(logger('dev'));
    app.use('/api', route);

    app.use(errorMiddleware);

    app.use('/isAlive', (_req, res) => {
        res.send('OK');
    });

    app.use('*', (_req, res) => {
        res.status(404).send('Invalid Route');
    });

    app.listen(port, () => {
      console.log(`listening at http://localhost:${port}`);
    });
};

