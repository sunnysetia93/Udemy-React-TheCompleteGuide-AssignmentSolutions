import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import Aux from './hoc/Auxiliary';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Aux>
          <Navbar />
          <Switch>
            <Route path="/courses/course" component={Course} />
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route path="/" render={()=> <h1>404 not found</h1>} />
          </Switch>
        </Aux>
      </BrowserRouter>
    );
  }
}

export default App;
