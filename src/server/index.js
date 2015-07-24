const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

import React from 'react';
import Location from 'react-router/lib/Location';
import Router from 'react-router/lib/Router';

import routes from '../routes';

// respond with "hello world" when a GET request is made to the homepage
app.get('*', function(req, res) {

  const location = new Location(req.path, req.query);

  Router.run(routes, location, (error, initialState, transition) => {

    const bodyString = React.renderToString(
      <Router {...initialState} />
    );

    const html = (
      <html>
        <head>
          <title>App</title>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: bodyString}} />
          <script src="//localhost:8888/bundle.js" />
        </body>
      </html>
    );

    res.send(React.renderToStaticMarkup(html));
  });
});

server.listen(process.env.PORT || 8000, function() {
  console.log('listening on', server.address().port);
});