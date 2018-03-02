import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from '../../pages/Home';
import Loading from '../Loading/Loading';

import './App.scss';

const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ '../../pages/DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ '../../pages/NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/dynamic" component={ AsyncDynamicPage } />
        <Route component={ AsyncNoMatch } />
      </Switch>
    </Router>
  );
}

export default App;
