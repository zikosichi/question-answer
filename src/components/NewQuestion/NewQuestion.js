import React, { Component } from 'react';
import './NewQuestion.css';

class NewQuestion extends Component {
  render() {
    return (
      <div className="new-question">
        <h1>New Question</h1>

        <form>
          <div className="form-group">
            <label> Question </label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter question"
                   />
          </div>
          <div className="form-group">
            <label> Answer </label>
            <textarea className="form-control"
                      placeholder="Enter answer"
                      rows="3"></textarea>
          </div>
          <button type="submit"
                  className="btn btn-primary">
            Submit
          </button>
        </form>

      </div>
    );
  }
}

export default NewQuestion;
