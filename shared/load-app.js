import Router from 'react-router';

import performRouteHandlerStaticMethod from './utils/perform-route-handler-static-method';
import Flux from './flux';
import routes from './routes';

async function loadApp(currentUrl, render) {
  const flux = new Flux();

  return new Promise(function (resolve, reject) {

    const router = Router.create({
      routes: routes,
      location: currentUrl,
      onError: error => {
        reject(error);
      },
      onAbort: abortReason => {
        const error = new Error();
        if (abortReason.constructor.name === 'Redirect') {
          const { to, params, query } = abortReason;
          const url = Router.makePath(to, params, query);
          error.redirect = url;
        }

        reject(error);
      }
    });

    router.run(function (Handler, state) {
      const appData = { router, flux, Handler, state };

      const routerCalledAndRendered = performRouteHandlerStaticMethod(
        state.routes,
        'routerWillRun',
        appData
      ).then(function () {
        render(flux, Handler, state);
      }).catch(function () {
        render(flux, Handler, state);
      });

      resolve(routerCalledAndRendered);
    });
  });
}

export default loadApp;
