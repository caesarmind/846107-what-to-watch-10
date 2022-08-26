/* eslint-disable @typescript-eslint/no-unused-vars */
import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import Signin from '../../pages/sign-in/sign-in';
import Page404 from '../../pages/404/404';
import AddReview from '../../pages/add-review/add-review';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type AppProps = {
  films: Films;
};
function App({films}:AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Main films={films} />} />
        <Route path={AppRoute.Signin} element={<Signin />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Films}>
          <Route index element={<MoviePage films={films}/>}/>
          <Route path={AppRoute.AddReview} element={<AddReview films={films}/>}/>
        </Route>
        <Route path={AppRoute.Player} element={<Player films={films}/>} >
          <Route path=":id" element={<Player films={films}/>} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


