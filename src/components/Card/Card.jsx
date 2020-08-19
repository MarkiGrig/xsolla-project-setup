import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Bookmark from './Bookmark/Bookmark';
import CardDate from './CardDate/CardDate';
import style from './Card.scss';
import { addBookmarkAction, removeBookmarkAction } from '../../actions/BookmarkActions';

const Card = ({
  id, imageSrc, title, date,
}) => {
  const bookmark = useSelector((state) => state.bookmarkState.find((i) => i === id), shallowEqual);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (bookmark !== undefined) {
      dispatch(removeBookmarkAction(id));
    } else {
      dispatch(addBookmarkAction(id));
    }
  }, [bookmark, id]);

  return (
    <div className={style.card}>
      <div className={style.card__link}>
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
      </div>
      <button className={style.card__bookmark} onClick={onClick} type="button">
        <Bookmark active={bookmark !== undefined} />
      </button>
    </div>
  );
};

export default Card;
