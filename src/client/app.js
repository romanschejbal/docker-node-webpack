require('./app.less');

import React, {Component} from 'react';
import Header from './header';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Application</h1>
        <p>
          Hello world!
        </p>
        <Header />
      </div>
    );
  }
}

/* global BROWSER */
if (BROWSER === true) {
  React.render(React.createElement(App), document.getElementById('root'));
}