require('./app.less');

import React, {Component} from 'react';
import Link from 'react-router/lib/Link';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1>App</h1>
        <ul className='menu'>
          <li><Link to='/' activeClassName='active' className='btn'>home</Link></li>
          <li><Link to='/counter' activeClassName='active' className='btn'>counter</Link></li>
        </ul>
        <div className='clear'>
          {this.props.children}
        </div>
      </div>
    );
  }
}