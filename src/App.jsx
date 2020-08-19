import { hot } from 'react-hot-loader/root';
import React from 'react';
import './style.scss';
import FilterCardGallery from './components/FilterCardGallery/FilterCardGallery';

const App = () => (
  <>
    <FilterCardGallery />
  </>
);

export default hot(App);
