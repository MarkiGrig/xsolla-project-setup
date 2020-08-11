import { hot } from 'react-hot-loader/root';
import React from 'react';
import style from './style.scss';
import logoSrc from './logo.png';

const App = () => (
  <div className={style.message}>
    <img alt="" className={style.logo} src={logoSrc} />
    Hello school!
    <input />
  </div>
);

export default hot(App);
