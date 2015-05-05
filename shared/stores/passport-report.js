import { Store } from 'flummox';
import { OrderedMap } from 'immutable';

import { noop } from 'lodash';

export default class PassportReportStore extends Store {

  constructor({ passportReportActions }) {
    super();

    this.registerAsync(passportReportActions.getReports, noop, this.handleNewReportsSuccess, this.handleNewReportsFailure);

    this.state = {
      reports: new OrderedMap(),
      message: null
    };
  }

  handleNewReportsSuccess(newReports) {
    const reports = newReports.reduce((acc, report) => {
      acc[report.id] = report;
      return acc;
    }, {});

    this.setState({
      reports: this.state.reports.merge(reports),
      message: null
    });
  }

  handleNewReportsFailure(error) {
    this.setState({
      message: error.message
    });
  }

  getReports() {
    return this.state.reports.toArray();
  }

  getMessage() {
    return this.state.message;
  }

}
