import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/BooksList'
import BooksList from "./components/BooksList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Books</h2>
        </div>
          <hr />
          <BooksList />
      </div>
    );
  }
}

export default App;
