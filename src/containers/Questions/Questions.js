import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Questions.css';

import Question from './Question/Question'

class Questions extends Component {
  render() {

    const noQuestions = (
      <div className="questions__list list p-3 text-muted font-weight-lighter">
        No questions yet. Why don't you create one? 👇
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
                        key={item.get('key')}>
                    {item.get('name')}
                  </span>
                )
              })}
            </small>
          </div>
        </div>

        {!this.props.questions.size && noQuestions}

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
})

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
