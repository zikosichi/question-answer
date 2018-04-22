import React, { Component } from 'react';
import Questions from '../Questions/Questions';
import NewQuestion from '../NewQuestion/NewQuestion';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col col-3">
            Here You can find 5 questions. Feel free to create your own questions
          </div>
          <div className="col">
            <div>
              <Questions></Questions>
            </div>
            <div className="mt-5">
              <NewQuestion></NewQuestion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
