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
        <h1>New Question</h1>

        <div>
          <div className="form-group">
            <label> Question </label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter question"
                   onChange={this.handleQuestionChange}
                   value={this.state.question}
                   />
          </div>
          <div className="form-group">
            <label> Answer </label>
            <textarea className="form-control"
                      placeholder="Enter answer"
                      onChange={this.handleAnswerChange}
                      value={this.state.answer}
                      rows="3"></textarea>
          </div>
          <button type="submit"
                  className="btn btn-primary"
                  onClick={this.handleNewQuestion}>
            Submit
          </button>
        </div>

      </div>
    );
  }
}

// Map reducer methods
const mapDispatchToProps = dispatch => ({
  addNewQuestion: (payload) => dispatch(addNewQuestion(payload)),
})

export default connect(undefined, mapDispatchToProps)(NewQuestion)
