import React from 'react';
import style from './Page.scss';
import { useSelector } from 'react-redux';

const Page = ({ children }) => {
  const title = useSelector((state) => state.pageTitleState);
  return (
    <div className={style.page}>
      <h1 className={style.page__title}>{title}</h1>
      {children}
    </div>
  );
};

export default Page;
