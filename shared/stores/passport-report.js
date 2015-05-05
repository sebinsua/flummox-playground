import { Store } from 'flummox';
import { OrderedMap } from 'immutable';

export default class PassportReportStore extends Store {

  constructor({ passportReportActions }) {
    super();

    this.register(passportReportActions.getReports, this.handleNewReports);

    this.state = {
      reports: new OrderedMap()
    };
  }

  handleNewReports(newReports) {
    const reports = newReports.reduce((acc, report) => {
      acc[report.id] = report;
      return acc;
    }, {});

    this.setState({
      reports: this.state.reports.merge(reports)
    });
  }

  getReports() {
    return this.state.reports.toArray();
  }
}
