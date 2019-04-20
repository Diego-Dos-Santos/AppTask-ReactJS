import React, { Component } from 'react';
import './App.css';
import Todos from './todos/todos.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todos/>
        </header>
      </div>
    );
  }
}

export default App;
