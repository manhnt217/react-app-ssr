import React, { Component } from 'react';
import styles from './index.module.css';

export default class HorizontalLayout extends Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.bgColor, color: this.props.color}}>HorizontalLayout</div>
    );
  }
}
