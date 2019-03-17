import React, { Component } from 'react';
import styles from './index.module.css';

export default class VerticalLayout extends Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.bgColor, color: this.props.color}}>VerticalLayout</div>
    );
  }
}
