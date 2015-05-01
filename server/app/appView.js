import React from 'react';
import FluxComponent from 'flummox/component';

import HtmlDocument from './views/html-document';
import DocumentTitle from 'react-document-title';

import loadApp from '../../shared/load-app';

export default function (app) {
  const NODE_ENV = app.get('env');

  app.use(async function (req, res) {
    const currentUrl = req.url;
    const redirect = res.redirect;
    const render = (flux, Handler, state) => {
      const appString = React.renderToString(
        <FluxComponent flux={flux}>
          <Handler {...state} />
        </FluxComponent>
      );
      const html = React.renderToStaticMarkup(
        <HtmlDocument
          lang={ 'en-GB' }
          env={ NODE_ENV }
          appString={ appString }
        />
      );
      const doctype = '<!DOCTYPE html>';
      res.send(doctype + html);

      DocumentTitle.rewind();
    };

    try {
      await loadApp(currentUrl, render);
    } catch (error) {
      // console.error(error);
      if (error.redirect) {
        return redirect(error.redirect);
      }

      throw error;
    }
  });
}
