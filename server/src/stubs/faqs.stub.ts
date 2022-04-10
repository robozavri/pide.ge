import * as _ from 'lodash';
import { cloneStub } from '../helpers/stub-helpers';



function getQuestionObject(i: number = 0): any {
  return {
    en: `question en ${i}`,
    ge: ` რა არის პაიდი? ${i}`,
    ru: `question ru ${i}`,
  };
}

function getAnswerObject(i: number = 0): any {
  return {
    en: `answer en ${i}`,
    ge: `At Rover we know that every dog, cat, and pet parent is unique. Our marketplace of pet sitters and dog walkers the largest in the world—is designed to help you find your perfect match. You’ll find a variety of sitters and dog walkers. ${i}`,
    ru: `answer ru ${i}`,
  };
}

const FaqsStub = {
  question: getQuestionObject(),
  answer: getAnswerObject(),
};

export function getSingle(fields?: any): any {
  return {
    ...cloneStub(FaqsStub),
    ...fields
  };
}

export function getMany(count: number, fields?: any) {
  return _.range(count).map((i: number) => ({
    ...getSingle(),
    ...fields,
    position: i,
    question: getQuestionObject(i),
    answer: getAnswerObject(i),
  }));
}
