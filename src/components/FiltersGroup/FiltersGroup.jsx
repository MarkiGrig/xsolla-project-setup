import React from 'react';
import style from './FiltersGroup.scss';
import LabeledSelector from '../LabeledSelector/LabeledSelector';

const FiltersGroup = ({ filters }) => (
  <div className={style.filtersGroup}>
    {filters.map((filter) => (
      <div key={filter.label} className={style.filtersGroup__item}>
        <LabeledSelector
          options={filter.options}
          label={filter.label}
          onSelect={filter.handler}
        />
      </div>
    ))}
  </div>
);

export default FiltersGroup;
