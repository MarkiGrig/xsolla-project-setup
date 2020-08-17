import React from 'react';
import Bookmark from './Bookmark/Bookmark';
import CardDate from './CardDate/CardDate';
import style from './Card.scss';

const Card = ({ imageSrc, title, date }) => (
  <div className={style.card}>
    <div className={style.card__link}>
      <div className={style.card__background}>
        <img alt="" src={imageSrc} className={style.card__backgroundImage} />
        <div className={style.card__backgroundFilter} />
      </div>
      <div className={style.card__content}>
        <div className={style.card__contentDate}>
          <CardDate date={date} />
        </div>
        <div className={style['card__content-title']}>{title}</div>
      </div>
    </div>
    <div className={style.card__bookmark}>
      <Bookmark />
    </div>
  </div>
);

export default Card;
