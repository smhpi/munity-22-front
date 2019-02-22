import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Create from './container/create.component'
import Edit from './container/edit.component'
import Index from './container/index.component'

class App extends Component {
 
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">MarketUnity</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/list'} className="nav-link">List</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
        <h2>Integration Platform for Online Marketplaces</h2> <br/>
        <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/list' component={ Index } />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
