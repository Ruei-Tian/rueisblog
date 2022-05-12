import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  };

  const [name, setName] = useState('ruei');

  useEffect(() => {
    console.log('after', count, name);
    return () => {
      console.log('before', count, name);
    };
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={clickHandler}>change Count!</button>
      <p>{name}</p>
      <button type="button" onClick={() => setName('Peter')}>change Name!</button>
    </>
  );
};

const CountHandler = () => {
  const [ifCounterShow, setIfCounterShow] = useState(true);

  return (
    <>
      {ifCounterShow ? <Counter /> : null}
      <button type="button" onClick={() => setIfCounterShow(!ifCounterShow)}>toggle Counter!</button>
    </>
  );
};
const SayHello = (props) => {
  const { names } = props;

  return (
    <div
      className={styles.main}
      style={
      {
        fontSize: 30,
      }
    }
    >
      {names.map((name) => (<p key={name}>{`Hello ${name || 'world'}`}</p>))}
    </div>
  );
};

SayHello.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
};
SayHello.defaultProps = {
  names: [],
};

const root = createRoot(document.getElementById('app'));
root.render(<CountHandler />);
