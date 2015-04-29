import React from 'react/addons';
import { RouteHandler } from 'react-router';
import AppNav from './app-nav';

const { CSSTransitionGroup } = React.addons;

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
