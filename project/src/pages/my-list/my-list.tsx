import PageFooter from '../../components/page-footer/page-footer';
import BlankSVG from '../../components/blank-svg/blank-svg';
import FilmCard from '../../components/film-card/film-card';
import { Films, Film } from '../../types/films';
import { useState } from 'react';

type MoviePageProps = {
  films:Films;
}
function MyList({films}:MoviePageProps):JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [choosenFilm, setChoosenFilm] = useState({});
  const onSelectedFilmChange = ((film:Film) => {
    setChoosenFilm(film);
  }
  );

  return(
    <>
      <BlankSVG />
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a href="#signout" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__films-list">
            {
              films.map((film) => {
                const {id} = film;
                return(
                  <FilmCard
                    key={id}
                    film={film}
                    onSubmit={onSelectedFilmChange}
                  />
                );
              })
            }
          </div>
        </section>
        <PageFooter />
      </div>
    </>

  );
}

export default MyList;
