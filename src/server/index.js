const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

import React from 'react';
import App from '../client/app';

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {

  const reactElement = React.createElement(App);
  const bodyString = React.renderToString(reactElement);

  const html = (
    <html>
      <head>
        <title>Title</title>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{__html: bodyString}} />
        <script src="//localhost:8888/bundle.js" />
      </body>
    </html>
  );

  res.send(React.renderToStaticMarkup(html));
});

server.listen(process.env.PORT || 8000, function() {
  console.log('listening on', server.address().port);
});