import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// route components
import BikePage from '../../ui/BikePage';
import LogPage from '../../ui/LogPage';
import RulesPage from '../../ui/RulesPage';
import NotFoundPage from '../../ui/NotFoundPage';

export const renderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={BikePage}/>
      <Route exact path="/log" component={LogPage}/>
      <Route exact path="/rules" component={RulesPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);
