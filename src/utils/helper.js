import { fromJS } from 'immutable'
import _ from 'lodash'

export const orderQuestions = (questions, sortBy) => {

  let array = questions.toJS()
  const key = sortBy.get('key')

  array = array.sort((a, b) => {
    return a[key].toString().toLowerCase() > b[key].toString().toLowerCase() ? 1 : -1;
  });

  return fromJS(array)
}
