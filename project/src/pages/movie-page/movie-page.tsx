import { Link, useParams } from 'react-router-dom';
import BlankSVG from '../../components/blank-svg/blank-svg';
import MoviePageOverview from '../../components/movie-page-overview/moview-page-overview';
import PageFooter from '../../components/page-footer/page-footer';
import { Films } from '../../types/films';

type MoviePageProps = {
  films:Films;
}
function MoviePage({films}:MoviePageProps): JSX.Element {

  const params = useParams();
  const film = films.find((filmCheck) => filmCheck.id === params.id);

  return(
    <>
      <BlankSVG />
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.poster} alt="The Grand Budapest Hotel" />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>e
              </a>
            </div>
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
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.year}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`/player/${ film?.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to='addreview' className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.poster} alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>

            <MoviePageOverview />

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">

            {/* {
              films.map((film) => {
                const {id} = film;

                return(
                  <FilmCard key={id} film={film} />

                );
              })
            } */}


          </div>
        </section>
        <PageFooter />
      </div>
    </>
  );
}

export default MoviePage;
