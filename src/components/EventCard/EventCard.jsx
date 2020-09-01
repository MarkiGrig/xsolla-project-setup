import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPageTitleAction } from '../../actions/PageTitleActions';

const EventCard = ({ id }) => {
  const [event, setEvent] = useState({});
  const abortController = new AbortController();
  const { signal } = abortController;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const numId = id.match(/[0-9]/g).join('');
    if (!isNaN(numId) && numId.length === id.length) {
      fetch(`http://localhost:3000/events/${numId}`, { signal }).then(
        (response) => response.json(),
        (error) => error.json(),
      ).then(
        (response) => {
          if (!response.code) {
            setEvent(response);
            dispatch(setPageTitleAction(response.name ? response.name : ''));
          } else {
            const errorText = response.code ? response.code : 'no server answer';
            console.error(`Rejected: ${errorText}`);
          }
        },
      );
      return () => abortController.abort();
    }
    history.push('/events');
  }, [id]);

  const renderCard = () => (
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

  return event.name ? renderCard() : <div>event is not found :(</div>;
};

export default EventCard;
