import React, { Component } from 'react';
import Questions from '../Questions/Questions';
import NewQuestion from '../NewQuestion/NewQuestion';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="sidebar">
          <h1>
            Keep Calm and create your own questions
          </h1>
        </div>

        <div className="container">
          <div className="mt-5">
            <Questions></Questions>
          </div>
          <div className="mt-5">
            <NewQuestion></NewQuestion>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
