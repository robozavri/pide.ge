import { Router, Request, Response, NextFunction } from 'express';
import * as requestedWalkersDao from './requested-walkers.dao';
import * as requestedWalkersParser  from './requested-walkers.parser';
import * as auth from '../../auth';


const requestedWalkersRouter = Router();

requestedWalkersRouter.get('/', requestedWalkersParser.parseGetByQuery, getByQuery);
requestedWalkersRouter.post('/', auth.isAdmin, requestedWalkersParser.parseCreate, create);
requestedWalkersRouter.put('/:id', auth.isAdmin, requestedWalkersParser.parseUpdate, update);
requestedWalkersRouter.delete('/:id', auth.isAdmin, destroy);
requestedWalkersRouter.patch('/positions', requestedWalkersParser.parseUpdatePositions, updatePositions);

export default requestedWalkersRouter;

// =============== GET ===============

async function getByQuery(req: Request, res: Response, next: NextFunction) {
  try {
    const query = req.query;
    const requestedWalkersData = await requestedWalkersDao.getByQuery(query);
    res.json(requestedWalkersData);
  } catch (e) {
    next(e);
  }
}

// =============== POST ===============

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await requestedWalkersDao.create({ ...payload, position: 0 });
    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await requestedWalkersDao.update(payload._id, payload);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

async function updatePositions(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await payload.items.map((item: any) => {
      requestedWalkersDao.update(item._id, { position: item.position });
    });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

async function destroy(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await requestedWalkersDao.destroy(id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}