import React from 'react';
import FluxComponent from 'flummox/component';
import nunjucks from 'nunjucks';

import loadApp from '../../shared/load-app';

export default function (app) {
  nunjucks.configure('./server/app/views', {
    autoescape: true,
    express: app
  });

  app.use(async function (req, res) {
    const currentUrl = req.url;
    const redirect = res.redirect;
    const render = (flux, Handler, state) => {
      const appString = React.renderToString(
        <FluxComponent flux={flux}>
          <Handler {...state} />
        </FluxComponent>
      );

      res.render('index.html', {
        appString: appString,
        NODE_ENV: process.env.NODE_ENV
      });
    };

    try {
      await loadApp(currentUrl, render);
    } catch (error) {
      if (error.redirect) {
        return redirect(error.redirect);
      }

      throw error;
    }
  });
}
