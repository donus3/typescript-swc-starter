import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
};

export default errorMiddleware;
