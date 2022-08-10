import GenreFilter from '../../components/genre-filter/genre-filter';
import FilmCard from '../../components/film-card/film-card';
import { Films } from '../../types/films';
type MoviePageProps = {
  films:Films;
}
function MovieCatalog({films}:MoviePageProps): JSX.Element {
  return(
    <section className="catalog">
      <GenreFilter />
      <div className="catalog__films-list">
        {
          films.map((film) => {
            const {poster, title, id} = film;
            const keyValue = `${id}-${title}`;

            return(
              <FilmCard key={keyValue} poster={poster} title={title} />

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
