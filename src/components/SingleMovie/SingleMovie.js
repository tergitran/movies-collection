import React from "react";
import { useFetch } from "../../useFetch";
import styles from "./SingleMovie.module.css";
import { BsClock } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/vi.json"));

const SingleMovie = () => {
  let { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=d4b3bfeaef8ead976d2edf092fb4857a&language=vi&append_to_response=videos`;

  const { data, loading } = useFetch(url);

  console.log(
    "US (Alpha-2) => " + countries.getName("vn", "vi", { select: "official" })
  ); // United States of America

  const {
    backdrop_path,
    poster_path,
    overview,
    production_countries,
    release_date,
    revenue,
    title,
    runtime,
    original_title,
    genres,
    imdb_id,
  } = data;

  const c = Object.keys(data).length == 0;

  const d = new Date(release_date);
  const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

  const backdrop_url = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const poster_url = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className={styles.singlemovie}>
      {loading ? (
        <h1 style={{ textAlign: "center", marginTop: "200px" }}>Loading...</h1>
      ) : (
        <>
          <div
            className={styles.backdrop}
            style={{
              background: `linear-gradient(rgba(1,7,12,.8), rgba(1,7,12,.8)), url(  
         ${backdrop_url}
        ) center`,
            }}
          ></div>
          <div className={styles.content}>
            <div className={styles.play}>
              <img src={poster_url} />
              <Link to={`/watch/${imdb_id}`}>
                <button>Xem phim</button>
              </Link>
            </div>
            <div className={styles.infor}>
              <h1>{original_title}</h1>
              <h2>
                {title} (<span>{d.getFullYear().toString()}</span>)
              </h2>
              <div className={styles.gridOne}>
                <div className={styles.runtime}>
                  <span>
                    <BsClock />
                  </span>
                  <p>{runtime} phút</p>
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
              <div className={styles.table}>
                <h2 className={styles.col1}>Quốc gia</h2>
                <ul className={styles.countries}>
                  {production_countries &&
                    production_countries.map((country) => (
                      <li key={country.iso_3166_1}>
                        <a>
                          {countries.getName(country.iso_3166_1, "vi", {
                            select: "official",
                          })}
                        </a>
                      </li>
                    ))}
                </ul>
                <h2 className={styles.col1}>Khởi chiếu</h2>
                <h2>{date}</h2>
                <h2 className={styles.col1}>Doanh thu</h2>
                <h2>{revenue} $</h2>
              </div>
              <p className={styles.overview}>{overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleMovie;
