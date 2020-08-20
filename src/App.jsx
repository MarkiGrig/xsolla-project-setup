import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import style from './style.scss';
import Page from './components/Page/Page';
import FilterCardGallery from './components/FilterCardGallery/FilterCardGallery';

const App = () => {
  const history = useHistory();
  const matchHome = useRouteMatch({ path: '/', strict: true, sensitive: true });
  const matchEvents = useRouteMatch('/events');
  const matchEventCard = useRouteMatch('/events/:id');

  useEffect(() => {
    if (matchHome) {
      history.push('/events');
    }
  }, []);

  return matchEvents ? (
    <div className={style.App}>
      <Page>
        {
          matchEventCard ? <div>Карточка</div> : <FilterCardGallery />
        }
      </Page>
    </div>
  ) : <div>can not get this page :(</div>;
};

export default hot(App);
