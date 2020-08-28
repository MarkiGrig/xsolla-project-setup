import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitleAction } from '../../actions/PageTitleActions';

const EventCard = ({ id }) => {
  const [event, setEvent] = useState({});
  const abortController = new AbortController();
  const { signal } = abortController;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`, { signal }).then(
      (response) => response.json(),
      (error) => error.json(),
    ).then(
      (response) => {
        if (!response.code) {
          setEvent(response);
          dispatch(setPageTitleAction(response.name));
        } else {
          const errorText = response.code ? response.code : 'no server answer';
          console.error(`Rejected: ${errorText}`);
        }
      },
    );
    return () => abortController.abort();
  }, []);

  return (
    <div>
      <h2>
        {event.name}
      </h2>
      <p>
        Жанр:
        {event.genre}
      </p>
      <p>
        Дата:
        {event.date}
      </p>
      <p>
        Город:
        {event.city}
      </p>
    </div>
  );
};

export default EventCard;
