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
      <div className="questions__item__answer">
        {this.props.question.get('answer')}
      </div>
    )

    return (
      <div className="list-group-item questions__item">
        <div className="questions__item__question"
             onClick={this.handleToggle}>
          {this.props.question.get('question')}
        </div>
        {this.state.expanded && answer}
      </div>
    );
  }
}

export default Question
