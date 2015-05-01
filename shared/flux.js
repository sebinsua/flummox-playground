import { Flummox } from 'flummox';

import PassportReportActions from './actions/passport-report';
import PassportReportStore from './stores/passport-report';

export default class Flux extends Flummox {
  constructor() {
    super();

    const passportReportActions = this.createActions('reports', PassportReportActions);
    this.createStore('reports', PassportReportStore, { passportReportActions });

  }
}
