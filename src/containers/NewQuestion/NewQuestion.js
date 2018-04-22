import React, { Component } from 'react';
import { connect } from 'react-redux'
import './NewQuestion.css';

// Actions
import { addNewQuestion } from '../../store/actions'

class NewQuestion extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      question: '',
      answer: '',
      submitted: false,
    };

    this.state = this.initialState

    this.handleNewQuestion = this.handleNewQuestion.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
  }

  // On form submit
  handleNewQuestion() {
    this.setState({ submitted: true });
    if (!this.state.question || !this.state.answer) return

    this.props.addNewQuestion({
      question: this.state.question,
      answer: this.state.answer,
    })
    this.resetForm();
  }

  // On question input change
  handleQuestionChange(event) {
    this.setState({ question: event.target.value });
  }

  // On answer input change
  handleAnswerChange(event) {
    this.setState({ answer: event.target.value });
  }

  // Reset the form
  resetForm() {
    this.setState(this.initialState);
  }

  render() {
    const invalidQuestion = (
      <small className="text-danger px-3 mb-1 d-block font-weight-lighter">
        Please enter the question
      </small>
    )

    const invalidAnswer = (
      <small className="text-danger px-3 mb-1 d-block font-weight-lighter">
        Please enter the answer
      </small>
    )

    return (
      <div className="new-question">
        <h3 className="mb-3">New Question</h3>

        <div className="list">
          <div className="list-item">
            <input type="text"
              className="new-question__question"
              placeholder="Enter question"
              onChange={this.handleQuestionChange}
              value={this.state.question}
            />
            {!this.state.question && this.state.submitted && invalidQuestion}
          </div>
          <div className="list-item">
            <textarea rows="3"
              placeholder="Enter answer"
              className="new-question__answer"
              onChange={this.handleAnswerChange}
              value={this.state.answer}></textarea>
            {!this.state.answer && this.state.submitted && invalidAnswer}
          </div>
        </div>
        <button type="submit"
          className="btn btn-primary mt-3"
          onClick={this.handleNewQuestion}>
          Create
        </button>
      </div>
    );
  }
}

// Map reducer methods
const mapDispatchToProps = dispatch => ({
  addNewQuestion: (payload) => dispatch(addNewQuestion(payload)),
})

export default connect(undefined, mapDispatchToProps)(NewQuestion)
