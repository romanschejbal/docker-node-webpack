require('./header.less');

import React, {Component} from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <h2>Counter</h2>
        <p>
          COUNTER: <strong>{this.state.count}</strong>
        </p>
      </div>
    );
  }
}