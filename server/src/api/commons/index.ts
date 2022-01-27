import { Router, Request, Response, NextFunction } from 'express';
import * as commonDao from './common.dao';
import * as commonParser  from './common.parser';
import * as auth from '../../auth';
import { sendClientMessage } from './common.messages';


const commonRouter = Router();

commonRouter.get('/one', getOne);
commonRouter.put('/one', auth.isAdmin, commonParser.parseUpdate, update);
commonRouter.post('/email/send', commonParser.parseSendEmail, sendEmail);

export default commonRouter;

// =============== GET ===============

async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await commonDao.getOne();
    res.json(data);
  } catch (e) {
    next(e);
  }
}

// =============== POST ===============

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    const data = await commonDao.update(payload);
    res.json(data);
  } catch (e) {
    next(e);
  }
}

async function sendEmail(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    const commonData: any = await commonDao.getOne();
    sendClientMessage(commonData.contact.adminEmail, payload);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}
