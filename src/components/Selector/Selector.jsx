import React, { useState, useCallback } from 'react';
import Arrow from './Arrow.svg';
import SvgComponent from '../SvgComponent/SvgComponent';
import style from './Selector.scss';

const Selector = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    if (value !== selectedValue) {
      onSelect(value);
      setSelectedValue(value);
    }
  }, [selectedValue]);

  return (
    <div className={style.selector}>
      <select className={style.selector__select} onChange={(e) => onChange(e)}>
        {options.map((option, index) => (
          <option key={index.toString()} className={style.selector__option}>{option}</option>
        ))}
      </select>
      <SvgComponent className={style.selector__polygon}>
        <Arrow />
      </SvgComponent>
    </div>
  );
};

export default Selector;
