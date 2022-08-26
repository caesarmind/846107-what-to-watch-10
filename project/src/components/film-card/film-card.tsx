import { Link } from 'react-router-dom';
import {Film} from '../../types/films';

type FilmCardProps = {
  film: Film,
  onSubmit: (arg:Film) => void,
};

function FilmCard({film, onSubmit}:FilmCardProps): JSX.Element {
  const {id, poster, title} = film;
  return (
    <article
      onMouseOver={()=>onSubmit(film)}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={poster} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`films/${ id}`} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;

