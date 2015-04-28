import React from 'react/addons';
import { RouteHandler } from 'react-router';
import AppNav from './app-nav';

const { CSSTransitionGroup } = React.addons;

class AppHandler extends React.Component {

  /*
  static willTransitionTo(transition) {
    const { path } = transition;

    if (path !== '/' && path.endsWith('/')) {
      transition.redirect(path.substring(0, path.length - 1));
    }
  }
  */

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
