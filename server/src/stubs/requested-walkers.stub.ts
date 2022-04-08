import * as _ from 'lodash';
import { cloneStub, generateImage } from '../helpers/stub-helpers';



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

function getImageObject(i: number = 0): any {
  return { url: generateImage() };
}

function getTagsObject(i: number = 0): any {
    return [{
      en: `tag en ${i}`,
      ge: `tag ge ${i}`,
      ru: `tag ru ${i}`,
    }, {
      en: `tag en ${i} 2`,
      ge: `tag ge ${i} 2`,
      ru: `tag ru ${i} 2`,
    },  {
      en: `tag en ${i} 3`,
      ge: `tag ge ${i} 3`,
      ru: `tag ru ${i} 3`,
    }];
}

const RequestedWalkersStub = {
  name: getNameObject(),
  description: getDescriptionObject(),
  Image: getImageObject(),
  tags: getTagsObject(),
};

export function getSingle(fields?: any): any {
  return {
    ...cloneStub(RequestedWalkersStub),
    ...fields
  };
}

export function getMany(count: number, fields?: any) {
  return _.range(count).map((i: number) => ({
    ...getSingle(),
    ...fields,
    position: i,
    name: getNameObject(i),
    description: getDescriptionObject(i),
    Image: getImageObject(i),
    tags: getTagsObject(i),
  }));
}
