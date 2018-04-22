import React, { Component } from 'react';
import { connect } from 'react-redux'
import './NewQuestion.css';

// Actions
import { addNewQuestion } from '../../store/actions'

class NewQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: '',
    };

    this.handleNewQuestion = this.handleNewQuestion.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
  }

  // On form submit
  handleNewQuestion() {
    this.props.addNewQuestion(this.state)
  }

  // On question input change
  handleQuestionChange(event) {
    this.setState({ question: event.target.value });
  }

  // On answer input change
  handleAnswerChange(event) {
    this.setState({ answer: event.target.value });
  }

  render() {
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
          </div>
          <div className="list-item">
            <textarea rows="3"
                      placeholder="Enter answer"
                      className="new-question__answer"
                      onChange={this.handleAnswerChange}
                      value={this.state.answer}></textarea>
          </div>
        </div>
        <button type="submit"
                className="btn btn-primary mt-3"
                onClick={this.handleNewQuestion}>
          Submit
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
