import React from 'react';
import style from './style.scss';
import logoSrc from './logo.png';

const App = () => (
  <div className={style.message}>
    <img className={style.logo} src={logoSrc} />
    Hello school
  </div>
);

export default App;
