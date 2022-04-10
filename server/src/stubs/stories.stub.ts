import * as _ from 'lodash';
import { cloneStub, generateImage } from '../helpers/stub-helpers';



function getTitleObject(i: number = 0): any {
  return {
    en: ` title en ${i}`,
    ge: `ელეონორა ტ. ${i}`,
    ru: `title ru ${i}`,
  };
}

function getDescriptionObject(i: number = 0): any {
  return {
    en: `description en ${i}`,
    ge: `უბრალოდ მინდა მადლობა გადაგიხადოთ თქვენ და მარიამს ❤️ მაქსი ისე ასეირნა ჩვენ არც გავხსენებივართ ამას 😂 ორი ღამე არ მეძინა ნერვიულობით და ჯერ მარიამს რომ შევხვდი მაშინ დავმშვიდდი, მერე მაქსი რომ უპრობლემოდ გაყვა ❤️ მოკლედ, მადლობა დიდი და ვიცი ვის მივმართო როცა დამჭირდება ${i}`,
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
