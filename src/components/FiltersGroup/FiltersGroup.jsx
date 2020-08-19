import React from 'react';
import style from './FiltersGroup.scss';
import LabeledSelector from '../LabeledSelector/LabeledSelector';

const FiltersGroup = ({ filters }) => (
  <div className={style.filtersGroup}>
    {filters.map((filter) => (
      <LabeledSelector
        key={filter.label}
        options={filter.options}
        label={filter.label}
        onSelect={filter.handler}
      />
    ))}
  </div>
);

export default FiltersGroup;
