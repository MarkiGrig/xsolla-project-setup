import React from 'react';
import Selector from '../Selector/Selector';
import style from './LabeledSelector.scss';

const LabeledSelector = ({ options, label, onSelect }) => (
  <div className={style.labeledSelector}>
    <div className={style.labeledSelector__label}>{label}</div>
    <Selector options={options} onSelect={onSelect} />
  </div>
);

export default LabeledSelector;
