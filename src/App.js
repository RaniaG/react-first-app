import React, { Component } from 'react';
import './App.css';
import { MovieFiltering } from './Components/movies/filter';
import { PostsListing } from './Components/posts/list';

class App extends Component {
  render() {
    // console.log(data);
    return (
      <MovieFiltering />
      // <Switch>
      //   <Route path="/posts" component={PostsListing} />
      //   <Route path="/posts/add" component={}
      // </Switch>
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