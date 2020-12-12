import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../../useFetch";
import styles from "./Result.module.css";

const Result = (props) => {
  const { movie, isListView } = props;
  const {
    poster_path,
    title,
    original_title,
    overview,
    release_date,
    id,
  } = movie;

  const poster_url = `https://image.tmdb.org/t/p/original${poster_path}`;
  const d = new Date(release_date);

  const gridView = (
    <div className={styles.result}>
      <Link to={`/${id}`}>
        <img src={poster_url}></img>
      </Link>
      <h1>{title}</h1>
      <h1>{original_title}</h1>
    </div>
  );

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d4b3bfeaef8ead976d2edf092fb4857a&language=vi`;

  const { data } = useFetch(url);
  const { runtime, genres } = data;

  if (isListView) {
  }

  const listView = (
    <div className={styles.listView}>
      <Link to={`/${id}`}>
        <img src={poster_url}></img>
      </Link>
      <div className={styles.infor}>
        <div className={styles.row}>
          <div className={styles.colLeft}>
            <h1>{original_title}</h1>
            <h2>
              {title} (<span>{d.getFullYear().toString()}</span>)
            </h2>
          </div>
          <div className={styles.colRight}>
            <p>{runtime} phút</p>
          </div>
        </div>
        <div className={styles.overview}>
          <p>{overview}</p>
        </div>
        <div className={styles.genres}>
          {genres &&
            genres.map((genre) => (
              <a href="#" key={genre.id}>
                {genre.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );

  return isListView ? listView : gridView;
};

export default Result;
