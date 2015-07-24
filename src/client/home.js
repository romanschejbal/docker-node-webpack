import React from 'react';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <h2>Homepage</h2>
        {this.props.children}
      </div>
    );
  }
}