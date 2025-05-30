import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';


// =============== POST ===============

export function parseSendEmail(req: Request, res: Response, next: NextFunction) {
  req.body = _.pick(req.body, ['contacts']);
  next();
}

export function parseUpdate(req: Request, res: Response, next: NextFunction) {
  req.body = parseCommon(req.body);
  next();
}


function parseCommon(body: any) {
  return _.pick(body, [
    'promo',
    'contacts',
    'aboutUs',
    'policy',
    'privacy',
    'faqs',
  ]);
}
