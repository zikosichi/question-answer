import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Question.css';

class Question extends Component {
  render() {
    return (
      <div className="list-group-item questions__item">
        <div className="questions__item__question">
          {this.props.question.get('question')}
        </div>
        <div className="questions__item__answer">
          {this.props.question.get('answer')}
        </div>
      </div>
    );
  }
}

export default Question
