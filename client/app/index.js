import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';

import loadApp from '../../shared/load-app';

export default async function main() {
  const currentUrl = Router.HistoryLocation;
  const redirect = (url) => {
    console.error('Redirect is not supported on the client yet.');
    console.log(url);
  };
  const render = (flux, Handler, state) => {
    React.render(
      <FluxComponent flux={flux}>
        <Handler {...state} />
      </FluxComponent>,
      document.getElementById('app')
    );
  };

  try {
    await loadApp(currentUrl, render);
  } catch (error) {
    console.error(error);
    if (error.redirect) {
      return redirect(error.redirect);
    }

    throw error;
  }
}
