import React from 'react';
import Card from '../Card/Card';
import style from './CardGallery.scss';
import { getDayFromDate } from '../../utils/utils';

const CardGallery = ({ events }) => (
  <div className={style.cardGallery__container}>
    <div className={style.cardGallery}>
      {events.map((event) => (
        <div key={event.id} className={style.cardGallery__item}>
          <Card
            id={event.id}
            date={getDayFromDate(event.date)}
            imageSrc={event.image}
            title={event.name}
          />
        </div>
      ))}
    </div>
  </div>
);

export default CardGallery;
