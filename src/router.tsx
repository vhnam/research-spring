import lazy from 'react-lazy-with-preload';

import config from './config';

const routes = [
  {
    path: config.paths.homepage,
    component: lazy(() => import('./scenes/Homepage')),
  },
  {
    path: config.paths.about,
    component: lazy(() => import('./scenes/AboutPage')),
  },
  {
    path: config.paths.company,
    component: lazy(() => import('./scenes/CompanyPage')),
  },
  {
    path: config.paths.trumpets,
    component: lazy(() => import('./scenes/TrumpetsPage')),
  },
  {
    path: config.paths.trombones,
    component: lazy(() => import('./scenes/TrombonesPage')),
  },
  {
    path: config.paths.mouthpieces,
    component: lazy(() => import('./scenes/MouthpiecesPage')),
  },
];

export default routes;
