import { Request, Response } from 'express';

export function auth(req: Request, res: Response, next: () => void) {
  console.log(req.header('Authorization'));
  next();
}
