import React, { Component } from 'react';
import './App.css';
import data from './data';
import { Movie } from "./Components/Movies";

class App extends Component {
  render() {
    console.log(data);
    return (
      <div className="container">
        <div className="row">
        { data.map(
            (item)=><Movie key={item.imdbID} movie={item} />
          )
        }
        </div>
      </div>
    );
  }
}

export default App;

/*

<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
*/