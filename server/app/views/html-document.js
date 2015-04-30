import React from 'react';

class HtmlDocument extends React.Component {

  render() {
    const { env, lang, appString } = this.props;

    const title = 'Untitled';

    let script, style;
    if (env === 'production') {
      style = <link rel="stylesheet" type="text/css" href="/assets/app.min.css" />;
      script = <script src="/assets/app.min.js" defer="defer" />;
    } else {
      script = <script src="http://localhost:8081/assets/app.js" defer="defer" />;
    }

    return (
      <html lang={ lang }>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>{ title }</title>

          { style }

        </head>

        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: appString }} />

          { script }

        </body>
      </html>
    );
  }
}

export default HtmlDocument;
