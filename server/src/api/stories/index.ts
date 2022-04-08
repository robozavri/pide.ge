import { Router, Request, Response, NextFunction } from 'express';
import * as storiesDao from './stories.dao';
import * as storiesParser  from './stories.parser';
import * as auth from '../../auth';


const storiesRouter = Router();

storiesRouter.get('/', storiesParser.parseGetByQuery, getByQuery);
storiesRouter.post('/', auth.isAdmin, storiesParser.parseCreate, create);
storiesRouter.put('/:id', auth.isAdmin, storiesParser.parseUpdate, update);
storiesRouter.delete('/:id', auth.isAdmin, destroy);
storiesRouter.patch('/positions', storiesParser.parseUpdatePositions, updatePositions);

export default storiesRouter;

// =============== GET ===============

async function getByQuery(req: Request, res: Response, next: NextFunction) {
  try {
    const query = req.query;
    const storiesData = await storiesDao.getByQuery(query);
    res.json(storiesData);
  } catch (e) {
    next(e);
  }
}

// =============== POST ===============

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await storiesDao.create({ ...payload, position: 0 });
    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await storiesDao.update(payload._id, payload);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

async function updatePositions(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await payload.items.map((item: any) => {
      storiesDao.update(item._id, { position: item.position });
    });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

async function destroy(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await storiesDao.destroy(id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}