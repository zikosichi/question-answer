import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const initialState = fromJS({
  isFetching: false,
  questions: [
    { id: 0, question: 'What is this?', answer: 'This is the magic' },
    { id: 1, question: 'What is this?', answer: 'This is the magic' },
    { id: 2, question: 'What is this?', answer: 'This is the magic' },
  ],
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_NEW_QUESTION:
      const q = { ...action.payload, id: _randomId() }
      return state.set('questions', [...state.get('questions'), fromJS(q)])

    case actionTypes.DELETE_QUESTION:
      console.log(action.payload);
      return state.set('questions', state.get('questions').filter(o => o.get('id') !== action.payload.get('id')));
      // return state.set('questions', [])

    default:
      return state
  }
}

// Generates random ID
function _randomId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
