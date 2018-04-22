import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const initialState = fromJS({
  isFetching: false,
  questions: [
    { question: 'What is this?', answer: 'This is the magic' }
  ],
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_NEW_QUESTION:
      return state.set('questions', [...state.get('questions'), fromJS(action.payload)])

    default:
      return state
  }
}
