import * as actionTypes from './actionTypes';

/**
 * Add new question
 */
export function addNewQuestion(payload) {
  console.log(payload);
  
  return {
    type: actionTypes.ADD_NEW_QUESTION,
    payload
  }
}