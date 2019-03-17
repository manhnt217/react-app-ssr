import React, { Component } from 'react';
import styles from './index.module.css';

export default class SimplePageLayout extends Component {
  render() {
    return (
      <div className={styles.page} style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
        <div className={styles.header}>
          {this.props.children && this.props.children.length && this.props.children[0]}
          {this.props.children && !this.props.children.length && this.props.children}
        </div>
        <div className={styles.sidebar}>
          {this.props.children && this.props.children.length && this.props.children[1]}
        </div>
        <div className={styles.content}>
          {this.props.children && this.props.children.length && this.props.children[2]}
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    );
  }
}
