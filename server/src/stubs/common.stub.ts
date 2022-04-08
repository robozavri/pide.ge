import * as _ from 'lodash';
import { cloneStub, generateImage } from '../helpers/stub-helpers';


const CommonStub = {
  'promo': {
    'title': {
      'ge': 'title ge',
      'en': 'title en',
      'ru': 'title ru'
    },
    'image': { url: generateImage()},
  },
  'contacts': {
    'email': 'info@pide.ge',
    'phone': '551085478',
  },
  'aboutUs': {
    'content': {
      'ge': 'content ge',
      'en': 'content en',
      'ru': 'content ru'
    }
  },
  'policy': {
    'content': {
      'ge': 'policy ge',
      'en': 'policy en',
      'ru': 'policy ru'
    }
  },
  'privacy': {
    'content': {
      'ge': 'privacy ge',
      'en': 'privacy en',
      'ru': 'privacy ru'
    }
  },
};

export function getSingle(fields?: any): any {
  return {
    ...cloneStub(CommonStub),
    ...fields
  };
}

export function getMany(count: number, fields?: any) {
  return _.range(count).map((i: number) => ({
    ...getSingle(),
    ...fields,
  }));
}