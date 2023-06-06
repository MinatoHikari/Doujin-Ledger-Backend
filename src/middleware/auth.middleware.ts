import { Request, Response } from 'express';

export function auth(req: Request, res: Response, next: () => void) {
  const token = req.header('Authorization');
  if (process.env.token !== token) {
    res.status(401).send('auth failed');
  } else next();
}
