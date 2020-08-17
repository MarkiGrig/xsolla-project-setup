import React from 'react';
import Arrow from './Arrow.svg';
import SvgComponent from '../SvgComponent/SvgComponent';
import style from './Selector.scss';

const Selector = ({ options }) => (
  <div className={style.selector}>
    <select className={style.selector__select}>
      {options.map((option, index) => (
        <option key={index.toString()} className={style.selector__option}>{option}</option>
      ))}
    </select>
    <SvgComponent className={style.selector__polygon}>
      <Arrow />
    </SvgComponent>
  </div>
);

export default Selector;
