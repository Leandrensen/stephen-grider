import React from 'react';
import { Router, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(_, cb) {
        System.import('./components/artists/ArtistCreate').then((module) =>
          cb(null, module.default)
        );
      },
    },
    {
      path: 'artists/:id',
      getComponent(_, cb) {
        System.import('./components/artists/ArtistDetail').then((module) =>
          cb(null, module.default)
        );
      },
    },
    {
      path: 'artists/:id/edit',
      getComponent(_, cb) {
        System.import('./components/artists/ArtistEdit').then((module) =>
          cb(null, module.default)
        );
      },
    },
  ],
};

const Routes = () => {
  return <Router history={hashHistory} routes={componentRoutes} />;
};

export default Routes;
