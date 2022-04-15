import { Router } from 'express';
import * as a from 'root/package.json';

const checkHealthRouter = Router();
checkHealthRouter.get('/check-health', (_, res) => {
  res.send({ status: 'ok', version: a.version });
});

export default checkHealthRouter;
