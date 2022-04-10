import * as _ from 'lodash';
import { cloneStub, generateImage } from '../helpers/stub-helpers';



function getNameObject(i: number = 0): any {
  return {
    en: `name en ${i}`,
    ge: `თინა კ. ${i}`,
    ru: `name ru ${i}`,
  };
}

function getDescriptionObject(i: number = 0): any {
  return {
    en: `description en ${i}`,
    ge: `👋 მე მქვია ანა. ვარ 19 წლის. სამხატვრო აკადემიის სტუდენტი, მე-2 კურსზე. გამიმართლა და ბავშვობიდანვე სახლში გვყავდა ბევრი ძაღლი. ბობი ჩ... ${i}`,
    ru: `description ru ${i}`,
  };
}

function getImageObject(i: number = 0): any {
  return { url: generateImage() };
}

function getTagsObject(i: number = 0): any {
    return [{
      en: `tag en ${i}`,
      ge: `100+ ჯავშანი ${i}`,
      ru: `tag ru ${i}`,
    }, {
      en: `tag en ${i} 2`,
      ge: `2 წლიანი გამოცდილება ${i} 2`,
      ru: `tag ru ${i} 2`,
    },  {
      en: `tag en ${i} 3`,
      ge: `უცხო ენა: ფრანგული ${i} 3`,
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
