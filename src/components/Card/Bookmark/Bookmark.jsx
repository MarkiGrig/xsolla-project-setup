import React from 'react';
import BookmarkSvg from './Bookmark.svg';
import SvgComponent from '../../SvgComponent/SvgComponent';
import style from './Bookmark.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Bookmark = ({ active }) => {
  const className = cx({
    bookmark: true,
    bookmark_active: active,
  });

  return (
    <SvgComponent className={className}>
      <BookmarkSvg />
    </SvgComponent>
  )
};

export default Bookmark;
