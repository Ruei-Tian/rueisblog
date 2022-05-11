import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

function Main() {
  return <h1 className={styles.main}>Hi JSX！</h1>;
}

ReactDom.render(<Main />, document.getElementById('app'));
