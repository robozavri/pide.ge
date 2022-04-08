import * as _ from 'lodash';
import { cloneStub, generateImage } from '../helpers/stub-helpers';



function getTitleObject(i: number = 0): any {
  return {
    en: `title en ${i}`,
    ge: `title ge ${i}`,
    ru: `title ru ${i}`,
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

const StoriesStub = {
  title: getTitleObject(),
  description: getDescriptionObject(),
  Image: getImageObject(),
};

export function getSingle(fields?: any): any {
  return {
    ...cloneStub(StoriesStub),
    ...fields
  };
}

export function getMany(count: number, fields?: any) {
  return _.range(count).map((i: number) => ({
    ...getSingle(),
    ...fields,
    position: i,
    title: getTitleObject(i),
    description: getDescriptionObject(i),
    Image: getImageObject(i),
  }));
}
