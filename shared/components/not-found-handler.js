import React from 'react';
import DocumentTitle from 'react-document-title';

class NotFoundHandler extends React.Component {

  render() {
    return (
      <DocumentTitle title='Page not found'>
        <div>Page not found.</div>
      </DocumentTitle>
    );
  }

}

export default NotFoundHandler;
