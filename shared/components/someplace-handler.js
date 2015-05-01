import React from 'react';
import DocumentTitle from 'react-document-title';

// TODO: See if you can simplify.
import connectToStores from 'flummox/connect';
import FluxComponent from 'flummox/component';

class SomeplaceHandler extends FluxComponent {

  handleClick(e) {
    e.preventDefault();
    this.flux.getActions('reports').getReports();
  }

  render() {
    const { reports } = this.props;

    const clickThis = <span onClick={this.handleClick.bind(this)}>Load</span>
    return (
      <DocumentTitle title='Someplace'>
        <div>
          { clickThis }
          <ul>
            {
              reports.map((report) => {
                  return <li key={ report.get('id') }>{ report.get('reporterName') }</li>
              })
            }
          </ul>
        </div>
      </DocumentTitle>
    );
  }

}

SomeplaceHandler = connectToStores(SomeplaceHandler, {
    'reports': store => ({
        reports: store.getReports()
    })
});

export default SomeplaceHandler;
