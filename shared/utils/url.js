import config from '../../config';
import url from 'url';

const baseUrl = config.REST_EXAMINER_PSN || 'http://localhost:3001';

export default function apiUrl(to) {
  if (typeof to === 'undefined') {
    return baseUrl;
  }

  return url.resolve(baseUrl, to);
}
