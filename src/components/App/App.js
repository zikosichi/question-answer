import React, { Component } from 'react';
import Questions from '../Questions/Questions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col col-3">
            Here You can find 5 questions
          </div>
          <div className="col col-auto">
            <Questions></Questions>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
