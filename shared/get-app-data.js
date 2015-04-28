import Router from 'react-router';

import performRouteHandlerStaticMethod from './utils/perform-route-handler-static-method';
import Flux from './flux';
import routes from './routes';

async function getAppData(currentUrl) {
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

  const { Handler, state } = await new Promise((resolve, reject) => {
    router.run((_Handler, _state) =>
      resolve({ Handler: _Handler, state: _state })
    );
  });

  const appData = { router, flux, Handler, state };

  try {
    await performRouteHandlerStaticMethod(state.routes, 'routerWillRun', appData);
  } catch (error) {
    console.error(error);
  }

  return appData;
}

export default getAppData;
