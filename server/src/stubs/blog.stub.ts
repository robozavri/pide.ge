import * as _ from 'lodash';
import { cloneStub, generateImage, generateSocials } from '../helpers/stub-helpers';



function getIdObject(i: number = 0): any {
  return _.random(1, 20);
}

function getCategoryObject(i: number = 0): any {
  return ;
}

function getNameObject(i: number = 0): any {
  return {
    en: `name en ${i}`,
    ge: `name ge ${i}`,
    ru: `name ru ${i}`,
  };
}

function getDescriptionObject(i: number = 0): any {
  return {
    en: `description en ${i}`,
    ge: `description ge ${i}`,
    ru: `description ru ${i}`,
  };
}

function getFbImageObject(i: number = 0): any {
  return { url: generateImage() };
}

function getThumbnailObject(i: number = 0): any {
  return { url: generateImage() };
}

function getViewsObject(i: number = 0): any {
  return _.random(1, 20);
}

function getLikedObject(i: number = 0): any {
  return _.random(1, 20);
}

function getReadTimeObject(i: number = 0): any {
  return _.random(1, 20);
}

function getUpdateDateObject(i: number = 0): any {
  return new Date();
}

function getCreateDateObject(i: number = 0): any {
  return new Date();
}

function getStatusObject(i: number = 0): any {
  return 'status';
}

function getMetaObject(i: number = 0): any {
  return {
    title : {
      en: `meta title en ${i}`,
    ge: `meta title ge ${i}`,
    ru: `meta title ru ${i}`,
    },
    description : {
      en: `meta description en ${i}`,
    ge: `meta description ge ${i}`,
    ru: `meta description ru ${i}`,
    },
    keywords: ['meta meta keyword1', 'meta meta keyword2', 'meta meta keyword3'],
    image: { url: generateImage() },
  };
}

const BlogStub = {
  
  id: getIdObject(),
  category: getCategoryObject(),
  name: getNameObject(),
  description: getDescriptionObject(),
  fbImage: getFbImageObject(),
  thumbnail: getThumbnailObject(),
  views: getViewsObject(),
  liked: getLikedObject(),
  readTime: getReadTimeObject(),
  updateDate: getUpdateDateObject(),
  createDate: getCreateDateObject(),
  status: getStatusObject(),
  meta: getMetaObject(),
};

export function getSingle(fields?: any): any {
  return {
    ...cloneStub(BlogStub),
    ...fields
  };
}

export function getMany(count: number, fields?: any) {
  return _.range(count).map((i: number) => ({
    ...getSingle(),
    ...fields,
    position: i,
    
    id: getIdObject(i),
    category: getCategoryObject(i),
    name: getNameObject(i),
    description: getDescriptionObject(i),
    fbImage: getFbImageObject(i),
    thumbnail: getThumbnailObject(i),
    views: getViewsObject(i),
    liked: getLikedObject(i),
    readTime: getReadTimeObject(i),
    updateDate: getUpdateDateObject(i),
    createDate: getCreateDateObject(i),
    status: getStatusObject(i),
    meta: getMetaObject(i),
  }));
}
