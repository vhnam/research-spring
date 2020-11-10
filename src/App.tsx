import React, {Suspense, useState} from 'react';
import {Route, Router, Switch} from 'react-router-dom';

import config from './config';
import routes from './router';

import history from './helpers/history';

import NavItem from './components/NavItem';

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
              <NavItem
                key={link.label.toLowerCase()}
                to={link.to}
                label={link.label}
                page={page}
                total={links.length}
                index={index}
                onClick={() => setPage(index)}
                onPreload={() => routes[index].component.preload()}
              />
            ))}
          </ul>
        </nav>
        <main
          className={styles.main}
          style={{
            paddingLeft: `${(page + 1) * 62}px`,
            paddingRight:
              page === 0 || page === links.length - 1
                ? 0
                : `${(links.length - page - 1) * 62 - 16}px`,
          }}
        >
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
