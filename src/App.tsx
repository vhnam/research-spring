import React, {Suspense, useState} from 'react';
import {Link, Route, Router, Switch} from 'react-router-dom';

import config from './config';
import routes from './router';

import history from './helpers/history';

import LoadingPage from './scenes/LoadingPage';

import 'glider-js/glider.min.css';
import styles from './App.module.css';

const links = [
  {to: config.paths.homepage, label: 'Homepage'},
  {to: config.paths.about, label: 'About'},
  {to: config.paths.company, label: 'Company'},
  {to: config.paths.trumpets, label: 'Trumpets'},
  {to: config.paths.trombones, label: 'Trombone'},
  {to: config.paths.mouthpieces, label: 'Mouthpieces'},
];

const App = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Router history={history}>
        <nav className={styles.nav}>
          <ul className={styles.navigation}>
            {links.map((link, index: number) => (
              <li
                key={link.label.toLowerCase()}
                style={{
                  zIndex: index * 10,
                  bottom:
                    index <= page
                      ? `${62 * index}px`
                      : `${
                          window.innerWidth - 60 * (links.length - index - 1)
                        }px`,
                }}
                onClick={() => setPage(index)}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className={styles.main} style={{marginLeft: `${page * 62}px`}}>
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
