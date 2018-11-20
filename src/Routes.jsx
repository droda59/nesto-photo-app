import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './login/LoginPage';
import NotFound from './shared/NotFound';
import { ROUTE_HOME } from './constants/routes';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path={ROUTE_HOME} component={Home} />
        <Route path='*' component={NotFound} />
    </Route>
);
