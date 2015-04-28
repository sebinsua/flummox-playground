// Render React app
import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';

import nunjucks from 'nunjucks';

import performRouteHandlerStaticMethod from '../../shared/utils/performRouteHandlerStaticMethod';
import Flux from '../../shared/Flux';
import routes from '../../shared/routes';

async function generateRouter(currentUrl) {
  const flux = new Flux();

  const router = Router.create({
    routes: routes,
    location: currentUrl,
    onError: error => {
      throw error;
    },
    onAbort: abortReason => {
      const error = new Error();

      if (abortReason.constructor.name === 'Redirect') {
        const { to, params, query } = abortReason;
        // TODO: How does this access router?
        const url = router.makePath(to, params, query);
        error.redirect = url;
      }

      throw error;
    }
  });

  let appString;

  const { Handler, state } = await new Promise((resolve, reject) => {
    router.run((_Handler, _state) =>
      resolve({ Handler: _Handler, state: _state })
    );
  });

  const routeHandlerInfo = { state, flux };

  try {
    await performRouteHandlerStaticMethod(state.routes, 'routerWillRun', routeHandlerInfo);
  } catch (error) {}

  return { flux, Handler, state };
}

export default function (app) {
  nunjucks.configure('./server/app/views', {
    autoescape: true,
    express: app
  });

  app.use(async function (req, res) {
    const url = req.url;
    const redirect = res.redirect;
    const render = function (data) {
      res.render('index.html', data);
    };

    let obj;
    try {
      obj = await generateRouter(url);
    } catch (error) {
      if (error.redirect) {
        return redirect(error.redirect);
      }

      throw error;
    }

    let { flux, Handler, state } = obj;
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
