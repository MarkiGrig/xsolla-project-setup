import React, { useState } from 'react';
import style from './Page.scss';
import FilterCardGallery from '../FilterCardGallery/FilterCardGallery';

const Page = () => {
  const [title, setTitle] = useState('Event Listing');
  return (
    <div className={style.page}>
      <h1 className={style.page__title}>{title}</h1>
      <FilterCardGallery />
    </div>
  );
};

export default Page;
