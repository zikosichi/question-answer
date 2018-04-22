import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

import { orderQuestions } from '../utils/helper'

const initialState = fromJS({
  questions: [
    {
      id: 0,
      question: 'How to add a question?',
      answer: 'Easy: just fill the form and submit it',
      timestamp: +Date.now()
    },
  ],
  orderItems: [
    { key: 'timestamp', name: 'Date' },
    { key: 'question', name: 'Alphabet' },
  ],
  selectedOrderItem: { key: 'timestamp', name: 'Date' },
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_NEW_QUESTION:
      const q = {
        ...action.payload,
        id: _randomId(),
        timestamp: +Date.now()
      }

      const array = state.get('questions').toJS()
      array.push(q)

      return state.set('questions', orderQuestions(fromJS(array), state.get('selectedOrderItem')))

    case actionTypes.DELETE_QUESTION:
      return state.set('questions', state.get('questions').filter(o => o.get('id') !== action.payload.get('id')));

    case actionTypes.CHANGE_ORDERING:
      return state.set('selectedOrderItem', action.payload)
                  .set('questions', orderQuestions(state.get('questions'), action.payload))

    default:
      return state
  }
}

// Generates random ID
function _randomId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
