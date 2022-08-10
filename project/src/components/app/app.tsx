/* eslint-disable @typescript-eslint/no-unused-vars */
import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import Signin from '../../pages/sign-in/sign-in';
import Page404 from '../../pages/404/404';
import AddReview from '../../pages/add-review/add-review';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';
import { Films } from '../../types/films';

type AppProps = {
  films: Films;
};
function App({films}:AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main films={films} />} />
        <Route path={AppRoute.Signin} element={<Signin />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Films} element={<MoviePage films={films}/>} />
        <Route path={AppRoute.AddReview} element={<AddReview />}/>
        <Route path={AppRoute.Player} element={<Player/>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


