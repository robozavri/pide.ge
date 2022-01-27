import * as _ from 'lodash';
import { cloneStub, generateImage, generateSocials } from '../helpers/stub-helpers';



function getTitleObject(i: number = 0): any {
  return 'title';
}

function getIsDoneObject(i: number = 0): any {
  return false;
}

const MigrationStub = {
  
  title: getTitleObject(),
  isDone: getIsDoneObject(),
};

export function getSingle(fields?: any): any {
  return {
    ...cloneStub(MigrationStub),
    ...fields
  };
}

export function getMany(count: number, fields?: any) {
  return _.range(count).map((i: number) => ({
    ...getSingle(),
    ...fields,
    position: i,
    
    title: getTitleObject(i),
    isDone: getIsDoneObject(i),
  }));
}
