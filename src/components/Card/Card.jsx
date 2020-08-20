import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Bookmark from './Bookmark/Bookmark';
import CardDate from './CardDate/CardDate';
import style from './Card.scss';
import { addBookmarkAction, removeBookmarkAction } from '../../actions/BookmarkActions';

const Card = ({
  id, imageSrc, title, date,
}) => {
  const bookmark = useSelector((state) => state.bookmarkState.find((i) => i === id), shallowEqual);
  const dispatch = useDispatch();
  const history = useHistory();

  const onBookmarkClick = useCallback(() => {
    if (bookmark !== undefined) {
      dispatch(removeBookmarkAction(id));
    } else {
      dispatch(addBookmarkAction(id));
    }
  }, [bookmark, id]);

  const onLinkClick = useCallback(() => {
    history.push(`/events/${id}`);
  }, [id]);

  return (
    <div className={style.card}>
      <button className={style.card__link} onClick={onLinkClick} type="button">
        <div
          className={style.card__background}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className={style.card__content}>
          <div className={style.card__contentDate}>
            <CardDate date={date} />
          </div>
          <div className={style['card__content-title']}>{title}</div>
        </div>
      </button>
      <button className={style.card__bookmark} onClick={onBookmarkClick} type="button">
        <Bookmark active={bookmark !== undefined} />
      </button>
    </div>
  );
};

export default Card;
