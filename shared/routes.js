import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import AppHandler from './components/app-handler';
import HomeHandler from './components/home-handler';
import SomeplaceHandler from './components/someplace-handler';
import NotFoundHandler from './components/not-found-handler';

export default (
  <Route name="app" path="/" handler={AppHandler}>
    <DefaultRoute handler={HomeHandler} />
    <Route name="someplace" path="/someplace" handler={SomeplaceHandler} />
    <NotFoundRoute handler={NotFoundHandler} />
  </Route>
);
