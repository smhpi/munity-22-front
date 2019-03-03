import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Create from './container/create.component'
import Edit from './container/edit.component'
import Index from './container/index.component'
import Home from './container/home'
import BbList from './container/bestbuy'

import logo from "./images/logo.png";

class App extends Component {
 
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand" >
          <img src={logo} alt="MarketUnity" />
          </Link>
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
              <li className="nav-item">
                <Link to={'/bestbuy'} className="nav-link">BestBuy</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
        <br/>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/create' component={ Create } />
            <Route path='/list/:id' component={ Edit } />
            <Route path='/list' component={ Index } />
            <Route path='/bestbuy' component={ BbList } />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
