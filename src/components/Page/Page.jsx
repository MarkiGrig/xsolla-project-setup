import React from 'react';
import style from './Page.scss';

const Page = ({ children, title }) => {
  return (
    <div className={style.page}>
      <h1 className={style.page__title}>{title}</h1>
      {children}
    </div>
  );
};

export default Page;
