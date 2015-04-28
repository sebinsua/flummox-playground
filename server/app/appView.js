import React from 'react';
import FluxComponent from 'flummox/component';
import nunjucks from 'nunjucks';

import getAppData from '../../shared/get-app-data';

export default function (app) {
  nunjucks.configure('./server/app/views', {
    autoescape: true,
    express: app
  });

  app.use(async function (req, res) {
    const currentUrl = req.url;
    const redirect = res.redirect;
    const render = (data) => {
      res.render('index.html', data);
    };

    try {
      var { flux, Handler, state } = await getAppData(currentUrl);
    } catch (error) {
      if (error.redirect) {
        return redirect(error.redirect);
      }

      throw error;
    }

    const appString = React.renderToString(
      <FluxComponent flux={flux}>
        <Handler {...state} />
      </FluxComponent>
    );

    render({
      appString: appString,
      env: process.env
    });
  });
}
