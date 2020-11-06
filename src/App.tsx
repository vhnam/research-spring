import React, {Suspense} from 'react';
import {Link, Route, Router, Switch} from 'react-router-dom';

import config from './config';
import routes from './router';

import history from './helpers/history';

import LoadingPage from './scenes/LoadingPage';

import 'glider-js/glider.min.css';
import styles from './App.module.css';

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router history={history}>
        <nav className={styles.nav}>
          <ul className={styles.navigation}>
            <li>
              <Link to={config.paths.homepage}>Homepage</Link>
            </li>
            <li>
              <Link to={config.paths.about}>About</Link>
            </li>
            <li>
              <Link to={config.paths.company}>Company</Link>
            </li>
            <li>
              <Link to={config.paths.trumpets}>Trumpets</Link>
            </li>
            <li>
              <Link to={config.paths.trombones}>Trombone</Link>
            </li>
            <li>
              <Link to={config.paths.mouthpieces}>Mouthpieces</Link>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>
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
        </main>
      </Router>
    </Suspense>
  );
};

export default App;
