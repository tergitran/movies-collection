import React from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieWatch.module.css";

const MovieWatch = () => {
  const params = useParams();
  console.log(params.imdbID);
  return (
    <div className={styles.moviewatch}>
      <div className={styles.player}>
        <div className={styles.wrapper}>
          <iframe
            allowfullscreen="allowfullscreen"
            src={`https://databasegdriveplayer.co/player.php?imdb=${params.imdbID}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieWatch;
