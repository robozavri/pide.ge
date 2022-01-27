import Model from './common.model';
import Promise from 'bluebird';
import { assertFound } from '../../helpers/db-result-handler';

// =============== Getters ===============

export function getOne() {
  return Model.findOne({}).select('-__v').lean()
    .then(assertFound(`common  was not found`));
}

// =============== Setters ===============

export function create(data: any) {
  return Model.create(data);
}

export function update(data: any) {
  return Model.updateMany({}, { $set: data });
}

export function destroyAll() {
  return Model.deleteMany({});
}

