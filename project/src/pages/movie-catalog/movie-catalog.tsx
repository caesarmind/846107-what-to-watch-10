import GenreFilter from '../../components/genre-filter/genre-filter';
import FilmCard from '../../components/film-card/film-card';
import { Film, Films } from '../../types/films';
import { useState} from 'react';
type MoviePageProps = {
  films:Films;
}

function MovieCatalog({films}:MoviePageProps): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [choosenFilm, setChoosenFilm] = useState({});
  const onSelectedFilmChange = ((film:Film) => {
    setChoosenFilm(film);
  }
  );


  return (
    <section className="catalog">
      <GenreFilter />
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
      <div className="catalog__more">
        <button className="catalog__button" type="button">
    Show more
        </button>
      </div>
    </section>
  );}

export default MovieCatalog;
