import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Questions.css';

import Question from './Question/Question'
import { changeOrdering } from '../../store/actions'

class Questions extends Component {
  render() {

    const noQuestions = (
      <div className="questions__list list p-3 text-muted font-weight-lighter">
        No questions yet. Why don't you create one?
        <span role="img" aria-label="↓"> 👇 </span>
      </div>
    )

    return (
      <div className="questions">
        <div className="d-flex align-items-center">
          <h3 className="questions__title mb-3">
            Questions
          </h3>

          <div className="ml-auto">
            <small className="order-by">
              Order by:
              {this.props.orderItems.map((item) => {
                const isCurrent = this.props.selectedOrderItem.get('key') === item.get('key')

                return (
                  <span className={`order-by__item ${isCurrent ? 'order-by__item--active' : ''}`}
                        onClick={() => this.props.changeOrdering(item)}
                        key={item.get('key')}>
                    {item.get('name')}
                  </span>
                )
              })}
            </small>
          </div>
        </div>

        {this.props.questions.size === 0 && noQuestions}

        <div className="questions__list list">
          {this.props.questions.map((item) => {
            return(
              <Question question={item}
                        key={item.get('id')}>
              </Question>
            )
          })}
        </div>
      </div>
    );
  }
}

// Map reducer props
const mapStateToProps = state => ({
  questions: state.get('questions'),
  orderItems: state.get('orderItems'),
  selectedOrderItem: state.get('selectedOrderItem'),
})

// Map reducer methods
const mapDispatchToProps = dispatch => ({
  changeOrdering: (payload) => dispatch(changeOrdering(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
