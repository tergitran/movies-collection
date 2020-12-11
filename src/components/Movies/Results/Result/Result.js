import React from "react";
import { Link } from "react-router-dom";
import styles from "./Result.module.css";

const Result = (props) => {
  const movie = props.movie;
  const { poster_path, title, original_title, id } = movie;

  return (
    <div className={styles.result}>
      <Link to={`/${id}`}>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`}></img>
      </Link>
      <h1>{title}</h1>
      <h1>{original_title}</h1>
    </div>
  );
};

export default Result;
