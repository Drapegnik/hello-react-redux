/**
 * Created by Drapegnik on 03.02.17.
 */

const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { // eslint-disable-line newline-after-import
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  return console.log('Listening at http://localhost:3000/');
});
