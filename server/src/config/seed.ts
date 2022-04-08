import logger from '../helpers/logger';
import config from '../config/environment';
import { roles } from '../constants/user';
import * as _ from 'lodash';

import * as UserDao from '../api/users/user.dao';
import * as MetaDao from '../api/metas/meta.dao';
import * as StoryDao from '../api/stories/stories.dao';
import * as RequestedWalkerDao from '../api/requested-walkers/requested-walkers.dao';
import * as FaqDao from '../api/faqs/faqs.dao';

import * as UserStub from '../stubs/user.stub';
import * as MetaStub from '../stubs/meta.stub';
import * as StoryStub from '../stubs/stories.stub';
import * as RequestedWalkerStub from '../stubs/requested-walkers.stub';
import * as FaqStub from '../stubs/faqs.stub';


export async function seedDB() {
  const { seedDB, env } = config;
  if (!seedDB) return;
  if (env === 'development') {
    await clearDBDevelopment();
    await seedDBDevelopment();
  }
  if (env === 'production') {
    await clearDBProduction();
    await seedDBProduction();
  }
}

export async function seedDBDevelopment() {
  await UserDao.insertMany(getAdmin());
  await MetaDao.create(MetaStub.getSingle());
  await StoryDao.insertMany(StoryStub.getMany(11));
  await RequestedWalkerDao.insertMany(RequestedWalkerStub.getMany(11));
  await FaqDao.insertMany(FaqStub.getMany(11));


  logger.info('Seed DB development completed');
}

export async function seedDBProduction() {
  await UserDao.insertMany(getAdmin());
  await MetaDao.create(MetaStub.getSingle());
  await StoryDao.insertMany(StoryStub.getMany(11));
  await RequestedWalkerDao.insertMany(RequestedWalkerStub.getMany(11));
  await FaqDao.insertMany(FaqStub.getMany(11));


  logger.info('Seed DB production completed');
}

export async function clearDBDevelopment() {
  await UserDao.destroyAll();
  await MetaDao.destroyAll();
  await StoryDao.destroyAll();
  await RequestedWalkerDao.destroyAll();
  await FaqDao.destroyAll();
}

export async function clearDBProduction() {
  await UserDao.destroyAll();
  await MetaDao.destroyAll();
  await StoryDao.destroyAll();
  await RequestedWalkerDao.destroyAll();
  await FaqDao.destroyAll();
}

function getAdmin() {
  return [
    UserStub.getSingle({
      email: 'admin@project.com',
      name: 'Admin',
      role: roles.ADMIN,
      isActivated: true,
    })
  ];
}