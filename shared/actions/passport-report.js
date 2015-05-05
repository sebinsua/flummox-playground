import { Actions } from 'flummox';
import apiUrl from '../utils/url';

import fetch from 'isomorphic-fetch';

export default class PassportReportActions extends Actions {

  async getReports() {
    const response = await fetch(apiUrl('/passport-reports'));
    return await response.json().then(function (body) {
      return body.data;
    });
  }

}
