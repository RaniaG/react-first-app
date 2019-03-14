import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
// import { MovieFiltering } from './Components/movies/filter';
// import { PostsListing } from './Components/posts/list';
import { UserProfile } from './Components/users/profile';
import { Navbar, Nav } from './bootstrap-imports';
import { Home } from './Components/home';
import { TestComponent } from './Components/temp/temp';
import { UserCard } from './Components/users/card';
import { UsersList } from './Components/users/list';
import { PostsList } from './Components/posts/list';
import { PostDetails } from './Components/posts/details';

class App extends Component {
  render() {
    return (

      <Router>
        <>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand >React</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/users" className="nav-link">Users</Link>
                <Link to="/posts" className="nav-link">Blog</Link>

                {/* <Nav.Link >Users</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user/:id" component={UserProfile} />
            <Route path="/users" exact component={UsersList} />
            <Route path="/post/:id" exact component={PostDetails} />
            <Route path="/posts" exact component={PostsList} />


          </Switch>
        </>
      </Router>
      // <TestComponent />
      // <MovieFiltering />
    );
  }
}

export default App;

