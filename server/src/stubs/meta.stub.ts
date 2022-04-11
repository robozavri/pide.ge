import * as _ from 'lodash';
import { cloneStub } from '../helpers/stub-helpers';

const MetaStub = {
  home: getMetaObject('home'),
  faqs: getMetaObject('faqs'),
};

function getMetaObject(name: string): any {
  return {
    title: { en: `${name} meta title en`, ge:  `${name} meta title ge`, ru:  `${name} meta title ru` },
    description: { en: `${name} meta description en`, ge: `${name} meta description ge`, ru: `${name} meta description ru` },
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    image: { url: '' },
  };
}

export function getSingle(fields?: any): any {
  return {
    ...cloneStub(MetaStub),
    ...fields
  };
}