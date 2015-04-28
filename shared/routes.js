import React from 'react';
import { Route, Redirect, DefaultRoute } from 'react-router';
import AppHandler from './components/app-handler';
import SomeplaceHandler from './components/someplace-handler';

export default (
  <Route name="app" path="/" handler={AppHandler}>
    <Route name="someplace" path="/someplace" handler={SomeplaceHandler}></Route>
  </Route>
);
