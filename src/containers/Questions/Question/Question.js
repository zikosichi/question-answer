import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Question.css';

// Actions
import { deleteQuestion } from '../../../store/actions'

class Question extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // Handle question delete
  handleDelete(event) {
    event.stopPropagation()
    this.props.deleteQuestion(this.props.question)
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
      <div className={'question-item list-item ' + (this.state.expanded ? 'question-item--expanded' : '')}>
        <div className="question-item__question"
             onClick={this.handleToggle}>
          <span> {this.props.question.get('question')} </span>

          <div className="ml-auto">
            <i className="fa fa-trash-o mr-3 question-item__delete"
               onClick={this.handleDelete}>
            </i>
            <i className="fa fa-angle-down question-item__arrow"></i>
          </div>
        </div>
        {this.state.expanded && answer}
      </div>
    );
  }
}

// Map reducer methods
const mapDispatchToProps = dispatch => ({
  deleteQuestion: (payload) => dispatch(deleteQuestion(payload)),
})

export default connect(undefined, mapDispatchToProps)(Question)

