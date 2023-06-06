import { Request, Response } from 'express';

export function auth(req: Request, res: Response, next: () => void) {
  const token = req.header('Authorization');
  if (process.env.token !== token) {
    res.send({
      code: 40100,
      message: 'token 校验失败',
    });
  } else next();
}
