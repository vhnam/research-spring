import React, {Suspense} from 'react';
import {Route, Router, Switch} from 'react-router-dom';

import routes from './router';

import history from './helpers/history';

import Wrapper from './components/Wrapper';

import LoadingPage from './scenes/LoadingPage';

import 'glider-js/glider.min.css';

const App = () => (
  <Suspense fallback={<LoadingPage />}>
    <Router history={history}>
      <Wrapper>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </Wrapper>
    </Router>
  </Suspense>
);

export default App;
