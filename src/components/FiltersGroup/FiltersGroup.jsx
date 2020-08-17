import React from 'react';
import style from './FiltersGroup.scss';
import LabeledSelector from '../LabeledSelector/LabeledSelector';

const FiltersGroup = ({ filters }) => (
  <div className={style.filtersGroup}>
    {filters.map((filter) => (
      <LabeledSelector options={filter.options} label={filter.label} />
    ))}
  </div>
);

export default FiltersGroup;
