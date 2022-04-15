import createLogger from 'pino-http';
import logger from 'src/supports/logger';

const loggerMiddleware = createLogger({
  logger: logger,
});

export default loggerMiddleware;
