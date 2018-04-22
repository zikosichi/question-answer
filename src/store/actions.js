import * as actionTypes from './actionTypes';

/**
 * Add new question
 */
export function addNewQuestion(payload) {
  return {
    type: actionTypes.ADD_NEW_QUESTION,
    payload
  }
}

/**
 * Delete question
 */
export function deleteQuestion(payload) {
  return {
    type: actionTypes.DELETE_QUESTION,
    payload
  }
}

/**
 * Change ordering
 */
export function changeOrdering(payload) {
  return {
    type: actionTypes.CHANGE_ORDERING,
    payload
  }
}