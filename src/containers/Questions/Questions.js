import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Questions.css';

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
              <div className="list-group-item questions__item">
                <div className="questions__item__question">
                  {item.get('question')}
                </div>
                <div className="questions__item__answer">
                  {item.get('answer')}
                </div>
              </div>
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
