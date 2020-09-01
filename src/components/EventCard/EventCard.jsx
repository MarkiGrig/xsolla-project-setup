import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPageTitleAction } from '../../actions/PageTitleActions';

const EventCard = ({ id }) => {
  const [event, setEvent] = useState(null);
  const abortController = new AbortController();
  const { signal } = abortController;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setEvent(null);
    const idDigits = id.match(/[0-9]/g);
    const numId = idDigits ? idDigits.join('') : null;
    if (numId && !isNaN(numId) && numId.length === id.length) {
      fetch(`http://localhost:3000/events/${numId}`, { signal }).then(
        (response) => response.json(),
        (error) => error.json(),
      ).then(
        (response) => {
          dispatch(setPageTitleAction(response.name ? response.name : ''));
          if (!response.code) {
            setEvent(response);
          } else {
            const errorText = response.code ? response.code : 'no server answer';
            console.error(`Rejected: ${errorText}`);
          }
        },
      );
      return () => {
        abortController.abort();
        dispatch(setPageTitleAction(''));
      }
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

  return event ? event.name ? renderCard() : <div>event is not found :(</div> : <div>loading...</div>;
};

export default EventCard;
