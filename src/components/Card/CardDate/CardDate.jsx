import React from 'react';
import style from './CardDate.scss';

const CardDate = ({ date }) => (
  <div className={style['card-date']}>{date}</div>
);

export default CardDate;
