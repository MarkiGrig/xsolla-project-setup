import React from 'react';
import { useSelector } from 'react-redux';
import style from './Page.scss';

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
