import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useRouteMatch, Redirect } from 'react-router-dom';
import style from './style.scss';
import Page from './components/Page/Page';
import FilterCardGallery from './components/FilterCardGallery/FilterCardGallery';
import EventCard from './components/EventCard/EventCard';

const App = () => {
  const matchHome = useRouteMatch({ path: '/', strict: true, sensitive: true });
  const matchEvents = useRouteMatch('/events');
  const matchEventCard = useRouteMatch('/events/:id');

  /**
   * Урлы ставить так, чтобы home был внизу
   * @returns компонет, подходящий под соответствующий урл
   */
  const renderPage = () => {
    if (matchEventCard) {
      // TODO useParams выдает undefined
      const { id } = matchEventCard.params;
      return <EventCard id={id} />;
    }
    if (matchEvents) {
      return <FilterCardGallery />;
    }
    if (matchHome) {
      return <Redirect to={{ pathname: '/events' }} />;
    }
    return <>can not find this page:(</>;
  };

  return (
    <div className={style.App}>
      <Page>{renderPage()}</Page>
    </div>
  );
};

export default hot(App);
