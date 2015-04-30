// Start webpack server
import webpackInit from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../webpack.config.dev';

const webpack = webpackInit(config);
const webpackDevServer = new WebpackDevServer(webpack, {
  publicPath: config.output.publicPath,
  hot: true
});

const PORT = 8081;
const HOST = 'localhost';

webpackDevServer.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`Dev server listening at ${HOST}:${PORT}`);
});
