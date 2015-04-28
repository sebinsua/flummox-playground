import express from 'express';

const app = express();

import serve from 'express-static';
app.use(serve('public'));

// import favicon from 'serve-favicon';
// app.use(favicon());

import appView from './appView';
appView(app);

export default app;
