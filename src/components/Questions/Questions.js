import React, { Component } from 'react';
import './Questions.css';

class Questions extends Component {
  render() {
    return (
      <div className="questions">
        <h1 className="questions__title">
          Created Questions
        </h1>
        <div className="list group questions__list">
          <div className="list-group-item questions__item">
            Question 1
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
