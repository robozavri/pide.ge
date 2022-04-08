import { Router, Request, Response, NextFunction } from 'express';
import * as faqsDao from './faqs.dao';
import * as faqsParser  from './faqs.parser';
import * as auth from '../../auth';


const faqsRouter = Router();

faqsRouter.get('/', faqsParser.parseGetByQuery, getByQuery);
faqsRouter.post('/', auth.isAdmin, faqsParser.parseCreate, create);
faqsRouter.put('/:id', auth.isAdmin, faqsParser.parseUpdate, update);
faqsRouter.delete('/:id', auth.isAdmin, destroy);
faqsRouter.patch('/positions', faqsParser.parseUpdatePositions, updatePositions);

export default faqsRouter;

// =============== GET ===============

async function getByQuery(req: Request, res: Response, next: NextFunction) {
  try {
    const query = req.query;
    const faqsData = await faqsDao.getByQuery(query);
    res.json(faqsData);
  } catch (e) {
    next(e);
  }
}

// =============== POST ===============

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await faqsDao.create({ ...payload, position: 0 });
    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await faqsDao.update(payload._id, payload);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

async function updatePositions(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await payload.items.map((item: any) => {
      faqsDao.update(item._id, { position: item.position });
    });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

async function destroy(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await faqsDao.destroy(id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}