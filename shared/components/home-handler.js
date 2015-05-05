import React from 'react';
import DocumentTitle from 'react-document-title';

class HomeHandler extends React.Component {

  render() {
    return (
      <DocumentTitle title='Home'>
        <div>You are home.</div>
      </DocumentTitle>
    );
  }

}

export default HomeHandler;
