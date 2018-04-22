import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Questions.css';

import Question from './Question/Question'

class Questions extends Component {
  render() {
    return (
      <div className="questions">
        <div className="d-flex align-items-center">
          <h3 className="questions__title mb-3">
            Questions
          </h3>

          <div className="ml-auto">
            <span className="text-muted font-weight-lighter">
              Order by
            </span>
          </div>

        </div>
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
})

// Map reducer methods
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
