import { Actions } from 'flummox';
import apiUrl from '../utils/url';

import fetch from 'isomorphic-fetch';

export default class PassportReportActions extends Actions {

  async getReports() {
    const response = await fetch(apiUrl('/passport-reports')).catch(function (err) {
      switch (err.name) {
        case 'Error':
        case 'TypeError':
        default:
          throw new Error('The API is inaccessible.');
      }
    });

    return await response.json().then(function (body) {
      return body.data;
    });
  }

}
