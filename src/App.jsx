import { hot } from 'react-hot-loader/root';
import React from 'react';
import './style.scss';
import CardGallery from './components/CardGallery/CardGallery';
import LabeledSelector from './components/LabeledSelector/LabeledSelector';

const App = () => (
  <>
    <LabeledSelector label="City:" options={[1, 2, 3, 4]} />
    <CardGallery />
  </>
);

export default hot(App);
