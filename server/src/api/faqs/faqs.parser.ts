import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { parseOffsetAndLimit } from '../../helpers/parser-utils';

// =============== GET ===============

export function parseGetByQuery(req: Request, res: Response, next: NextFunction) {
  const { query } = req;
  req.query = {
    ...parseOffsetAndLimit(query),
    find: {
      ...parseId(query),
    },
    ...parseSearch(query),
    ...parseQueryPopulate(query),
  };
  next();
}

function parseQueryPopulate({ populate }: any) {
  return populate ? { populate } : {};
}

function parseId({ _id }: { _id?: any }) {
  return _id ? { _id } : {};
}

function parseSearch({ keyword }: { keyword?: string }) {
  return keyword ? {
    or: [
      { 'question.en': { $regex: keyword, $options: 'i' } },
      { 'question.ge': { $regex: keyword, $options: 'i' } },
      { 'question.ru': { $regex: keyword, $options: 'i' } },
      { 'answer.en': { $regex: keyword, $options: 'i' } },
      { 'answer.ge': { $regex: keyword, $options: 'i' } },
      { 'answer.ru': { $regex: keyword, $options: 'i' } },
    ],
  } : {};
}

// =============== POST ===============

export function parseCreate(req: Request, res: Response, next: NextFunction) {
  req.body = parseBaseProps(req.body),
  next();
}

export function parseUpdate(req: Request, res: Response, next: NextFunction) {
  req.body = {
    _id: req.body._id,
    ...parseBaseProps(req.body)
  };
  next();
}

export function parseUpdatePositions(req: Request, res: Response, next: NextFunction) {
  req.body = { items: req.body.items };
  next();
}

function parseBaseProps(body: any) {
  return _.pick(body, [
    'question',
    'answer',
  ]);
}
