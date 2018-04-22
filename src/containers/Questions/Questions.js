import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Questions.css';

import Question from './Question/Question'

class Questions extends Component {
  render() {
    return (
      <div className="questions">
        <h1 className="questions__title">
          Created Questions
        </h1>
        <div className="list group questions__list">
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
