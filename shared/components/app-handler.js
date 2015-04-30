import React from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';

import AppNav from './app-nav';

class AppHandler extends React.Component {

  render() {
    return (
      <DocumentTitle title="Untitled">
        <div>
          <AppNav />
          <RouteHandler />
        </div>
      </DocumentTitle>
    );
  }

}

export default AppHandler;
