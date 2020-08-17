import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import style from './CardGallery.scss';

const getDayFromDate = (date) => date.split('.')[0];

const CardGallery = () => {
  const [events, setEvents] = useState([]);
  const abortController = new AbortController();
  const { signal } = abortController;

  useEffect(() => {
    fetch('data/events.json', { signal }).then(
      (response) => response.json(),
      (error) => error.json(),
    ).then(
      (response) => {
        if (!response.code) {
          setEvents(response);
        } else {
          const errorText = response.code ? response.code : 'no server answer';
          console.error(`Rejected: ${errorText}`);
        }
      },
    );
    return () => abortController.abort();
  }, []);

  return (
    <div className={style.cardGallery}>
      {events.map((event) => (
        <div key={event.id} className={style.cardGallery__item}>
          <Card
            date={getDayFromDate(event.date)}
            imageSrc={event.image}
            title={event.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGallery;
