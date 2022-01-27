import * as _ from 'lodash';
import { cloneStub, generateImage, generateSocials } from '../helpers/stub-helpers';



function getIdObject(i: number = 0): any {
  return _.random(1, 20);
}

function getNameObject(i: number = 0): any {
  return {
    en: `name en ${i}`,
    ge: `name ge ${i}`,
    ru: `name ru ${i}`,
  };
}

function getViewsObject(i: number = 0): any {
  return _.random(1, 20);
}

function getSortObject(i: number = 0): any {
  return _.random(1, 20);
}

function getUpdateDateObject(i: number = 0): any {
  return _.random(1, 20);
}

function getCreateDateObject(i: number = 0): any {
  return _.random(1, 20);
}

function getStatusObject(i: number = 0): any {
  return 'status';
}

const BlogCategoriesStub = {
  
  id: getIdObject(),
  name: getNameObject(),
  views: getViewsObject(),
  sort: getSortObject(),
  updateDate: getUpdateDateObject(),
  createDate: getCreateDateObject(),
  status: getStatusObject(),
};

export function getSingle(fields?: any): any {
  return {
    ...cloneStub(BlogCategoriesStub),
    ...fields
  };
}

export function getMany(count: number, fields?: any) {
  return _.range(count).map((i: number) => ({
    ...getSingle(),
    ...fields,
    position: i,
    
    id: getIdObject(i),
    name: getNameObject(i),
    views: getViewsObject(i),
    sort: getSortObject(i),
    updateDate: getUpdateDateObject(i),
    createDate: getCreateDateObject(i),
    status: getStatusObject(i),
  }));
}
