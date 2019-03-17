import React, { Component } from 'react';

export default class AppComp extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
