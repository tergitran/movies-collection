import React from "react";
import Result from "./Result/Result";
import styles from "./Results.module.css";

const url_trending =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=d4b3bfeaef8ead976d2edf092fb4857a&language=vi";

const Results = (props) => {
  const { results, isListView } = props;

  const view = isListView ? "listView" : "results";

  return (
    <div className={styles[view]}>
      {results &&
        results.map((movie) => (
          <Result key={movie.id} movie={movie} isListView={isListView} />
        ))}
    </div>
  );
};

export default Results;
