type FilmCardProps = {
  key: string,
  poster: string,
  title: string,
};
function FilmCard({key, poster, title}:FilmCardProps): JSX.Element {
  return (
    <article key={key} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
