import React from 'react';
import { RouteHandler } from 'react-router';
import AppNav from './app-nav';

class AppHandler extends React.Component {

  render() {
    return (
      <div>
        <AppNav />
        <RouteHandler />
      </div>
    );
  }

}

export default AppHandler;
