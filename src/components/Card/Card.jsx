import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Bookmark from './Bookmark/Bookmark';
import CardDate from './CardDate/CardDate';
import style from './Card.scss';
import { addBookmarkAction, removeBookmarkAction } from '../../actions/BookmarkActions';

const Card = ({
  id, imageSrc, title, date,
}) => {
  const bookmarks = useSelector((state) => state.bookmarkState, shallowEqual);
  const bookmark = bookmarks.filter((i) => i === id)[0];
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
      <div className={style.card__bookmark} onClick={onClick}>
        <Bookmark active={bookmark !== undefined} />
      </div>
    </div>
  );
};

export default Card;
