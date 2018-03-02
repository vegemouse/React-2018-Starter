import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import DynamicPage from '../../pages/DynamicPage';
import NoMatch from '../../pages/NoMatch';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/dynamic" component={ DynamicPage } />
        <Route component={ NoMatch } />
      </Switch>
    </Router>
  );
}

export default App;
