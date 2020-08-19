import { hot } from 'react-hot-loader/root';
import React from 'react';
import style from './style.scss';
import Page from './components/Page/Page';

const App = () => (
  <div className={style.App}>
    <Page />
  </div>
);

export default hot(App);
