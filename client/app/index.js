import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import url from 'url';

import getAppData from '../../shared/get-app-data';

async function main() {
  const currentUrl = Router.HistoryLocation;
  const redirect = (url) => {
    console.error('redirect is not supported on the client yet');
    console.log(url);
  };

  try {
    var { router, flux, Handler, state } = await getAppData(currentUrl);
  } catch (error) {
    if (error.redirect) {
      return redirect(error.redirect);
    }

    throw error;
  }

  React.render(
    <FluxComponent flux={flux}>
      <Handler {...state} />
    </FluxComponent>,
    document.getElementById('app')
  );

  // Intercept local route changes
  document.onclick = event => {
    const { toElement: target } = event;

    if (!target) return;

    if (target.tagName !== 'A') return;

    const href = target.getAttribute('href');

    if (!href) return;

    const resolvedHref = url.resolve(window.location.href, href);
    const { host, path } = url.parse(resolvedHref);

    if (host === window.location.host) {
      event.preventDefault();
      router.transitionTo(path);
    }
  };
}

main();
