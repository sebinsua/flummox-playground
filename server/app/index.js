import express from 'express';
import serve from 'express-static';

const app = express();

app.set('env', process.env.NODE_ENV || 'development');

if (app.get('env') === 'production') {
  app.use(serve('public'));
}

if (app.get('env') === 'development') {
  require('../hot-loader');
}

import favicon from 'serve-favicon';
app.use(favicon('public/favicon.png'));

import appView from './appView';
appView(app);

export default app;
