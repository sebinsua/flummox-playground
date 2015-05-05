import React from 'react';
import DocumentTitle from 'react-document-title';

import FluxComponent from 'flummox/component';

class SomeplaceHandler extends React.Component {

  render() {
    return (
      <DocumentTitle title='Someplace'>
        <FluxComponent connectToStores={{
            reports: store => ({
                reports: store.getReports(),
                message: store.getMessage()
            })
        }}>
          <InnerComponent />
        </FluxComponent>
      </DocumentTitle>
    );
  }

}

class InnerComponent extends React.Component {

  handleClick(e) {
    e.preventDefault();
    const flux = this.props.flux;
    flux.getActions('reports').getReports();
  }

  render() {
    const { reports, message } = this.props;

    const clickThis = <span onClick={this.handleClick.bind(this)}>Load</span>;
    let messageEl;
    if (message) {
      messageEl = <div className="message">{ message }</div>;
    }
    return (
      <div>
        { clickThis }
        { messageEl }
        <ul>
          {
            reports.map((report) => {
              return <li key={ report.get('id') }>{ report.get('reporterName') }</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default SomeplaceHandler;
