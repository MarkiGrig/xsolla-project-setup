import React from 'react';
import BookmarkSvg from './Bookmark.svg';
import SvgComponent from '../../SvgComponent/SvgComponent';
import style from './Bookmark.scss';

const Bookmark = ({ active }) => (
  <SvgComponent className={[style.bookmark, active ? 'bookmark_active' : undefined].join(' ')}>
    <BookmarkSvg />
  </SvgComponent>
);

export default Bookmark;
