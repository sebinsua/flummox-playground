import Router from 'react-router';

import performRouteHandlerStaticMethod from './utils/performRouteHandlerStaticMethod';
import Flux from './Flux';
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

  const appData = { flux, Handler, state };

  try {
    await performRouteHandlerStaticMethod(state.routes, 'routerWillRun', appData);
  } catch (error) {}

  return appData;
}

export default getAppData;
