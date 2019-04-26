import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';

// Loadable Components
const About = lazy(() => import('../pages/About'));

export const routes = (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);
