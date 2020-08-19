import React, { useEffect, useState, useCallback } from 'react';
import FiltersGroup from '../FiltersGroup/FiltersGroup';
import CardGallery from '../CardGallery/CardGallery';
import { getMonthFromDate } from '../../utils/utils';
import style from './FilterCardGallery.scss';

const Months = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

const filters = (cities, handlers) => ([
  {
    label: 'City: ',
    options: ['All', ...cities],
    handler: handlers.city,
  },
  {
    label: 'Month: ',
    options: ['All', ...new Set([...Object.keys(Months)])],
    handler: handlers.month,
  },
]);

const FilterCardGallery = () => {
  const [events, setEvents] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const abortController = new AbortController();
  const { signal } = abortController;

  useEffect(() => {
    fetch('data/events.json', { signal }).then(
      (response) => response.json(),
      (error) => error.json(),
    ).then(
      (response) => {
        if (!response.code) {
          setEvents(response);
          setCities([...new Set(response.map((event) => event.city))]);
        } else {
          const errorText = response.code ? response.code : 'no server answer';
          console.error(`Rejected: ${errorText}`);
        }
      },
    );
    return () => abortController.abort();
  }, []);

  const onCitySelect = useCallback((value) => { setSelectedCity(value); }, []);

  const onMonthSelect = useCallback((value) => { setSelectedMonth(value); }, []);

  const getFilteredEvents = useCallback(() => {
    let filteredEvents = events.concat();
    if (selectedCity && selectedCity !== 'All') {
      filteredEvents = filteredEvents.filter((event) => event.city === selectedCity);
    }
    if (selectedMonth && selectedMonth !== 'All') {
      filteredEvents = filteredEvents
        .filter((event) => getMonthFromDate(event.date) === Months[selectedMonth]);
    }
    return filteredEvents;
  }, [events, selectedCity, selectedMonth]);

  const handlers = {
    city: onCitySelect,
    month: onMonthSelect,
  };

  return (
    <div className={style.filterCardGallery}>
      <div className={style.filterCardGallery__filters}>
        <FiltersGroup filters={filters(cities, handlers)} />
      </div>
      <div className={style.filterCardGallery__gallery}>
        <CardGallery events={getFilteredEvents()} />
      </div>
    </div>
  );
};

export default FilterCardGallery;
