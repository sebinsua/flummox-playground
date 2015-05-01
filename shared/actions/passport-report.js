import { Actions } from 'flummox';
import { siteUrl } from '../utils/url';

import fetch from 'isomorphic-fetch';

export default class PassportReportActions extends Actions {

  async getReports() {
    console.log('firing');
    const url = siteUrl('/flummox/data/allDocs.json');
    const response = await fetch('http://localhost:3001/passport-reports');
    return await response.json().then(function (response) {
        return response.data;
    });
  }

}
