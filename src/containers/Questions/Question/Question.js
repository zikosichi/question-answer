import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Question.css';

class Question extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  // Handle question toggle
  handleToggle() {
    this.setState({ expanded: !this.state.expanded})
  }

  render() {
    const answer = (
      <div className="question-item__answer">
        {this.props.question.get('answer')}
      </div>
    )

    return (
      <div className="question-item list-item">
        <div className="question-item__question"
             onClick={this.handleToggle}>
          {this.props.question.get('question')}
        </div>
        {this.state.expanded && answer}
      </div>
    );
  }
}

export default Question
