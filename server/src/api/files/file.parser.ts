import { Request, Response, NextFunction } from 'express';
import { parseArray } from '../../helpers/parser-utils';

export function parseCreateAndDestroy(req: Request, res: Response, next: NextFunction) {
  req.body = {
    fileNamesToDestroy: parseArray(req.body.fileNamesToDestroy),
    mobileWidth: req.body.mobileWidth,
    mobileHeight: req.body.mobileHeight,
    desktopWidth: req.body.desktopWidth,
    desktopHeight: req.body.desktopHeight,
  };
  next();
}
