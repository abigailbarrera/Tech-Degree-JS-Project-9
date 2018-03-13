import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Mountains from './components/Mountains';
import Lions from './components/Lions';
import Donuts from './components/Donuts';
import NotFound from './components/NotFound';
import Home from './components/Home';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {

  render() { 
    return (
      <BrowserRouter>
        <div className="container">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchForm} />
            <Route exact path="/mountains" component={Mountains} />
            <Route exact path="/lions" component={Lions} />
            <Route exact path="/donuts" component={Donuts} />
            <Route exact path="/search/:topic" component={SearchResults} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
