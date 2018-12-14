import React, { Component } from 'react';
import './styles/App.scss';
import FeedForm from './components/feed_form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li>Bay City Government</li>
            <li>Dept of Governmental Ethics</li>
          </ul>
        </header>
        <div>
          <FeedForm />
        </div>
      </div>
    );
  }
}

export default App;
