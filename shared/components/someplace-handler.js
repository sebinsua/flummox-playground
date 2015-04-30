import React from 'react';
import DocumentTitle from 'react-document-title';

class SomeplaceHandler extends React.Component {

  render() {
    return (
      <DocumentTitle title='Someplace'>
        <div>
          <span>You have reached some places.</span>
        </div>
      </DocumentTitle>
    );
  }

}

export default SomeplaceHandler;
