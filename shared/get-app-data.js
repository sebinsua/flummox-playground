import Router from 'react-router';

import performRouteHandlerStaticMethod from './utils/perform-route-handler-static-method';
import Flux from './flux';
import routes from './routes';

async function getAppData(currentUrl, render) {
  const flux = new Flux();

  const router = Router.create({
    routes: routes,
    location: currentUrl/*,
    onError: error => {
      console.error(error);
      throw error;
    },
    onAbort: abortReason => {
      console.error(abortReason);
      const error = new Error();

      if (abortReason.constructor.name === 'Redirect') {
        const { to, params, query } = abortReason;
        // TODO: How does this access router?
        console.error("This should not be executed.");
        const url = router.makePath(to, params, query);
        error.redirect = url;
      }

      throw error;
    }
    */
  });

  router.run(async function (Handler, state) {
    // TODO: Fatal error, whenever this is re-run in the case of the
    //       client 'resolve' no longer exists.
    //       We do not want to resolve, we want to re-render.
    const appData = { router, flux, Handler, state };

    try {
      await performRouteHandlerStaticMethod(state.routes, 'routerWillRun', appData);
    } catch (error) {
      console.error(error);
    }

    render(flux, Handler, state);
  });

  return router;
}

export default getAppData;
