import express from 'express';
import logger from 'src/supports/logger';
import corsMiddleware from './middlewares/cors';
import errorMiddleware from './middlewares/errors';
import loggerMiddleware from './middlewares/logger';
import routers from './routes';

const app = express();

const startServer = () => {
  app.use(corsMiddleware);
  app.use(loggerMiddleware);

  app.use(routers);

  app.use(errorMiddleware);

  app.listen('8080', () => {
    logger.info('The service is ready at http://localhost:8080');
  });
};

export default startServer;
