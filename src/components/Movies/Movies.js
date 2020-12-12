import React, { useEffect, useRef, useState } from "react";
import Filters from "./Filters/Filters";
import styles from "./Movies.module.css";
import Results from "./Results/Results";

import Pagination from "@material-ui/lab/Pagination";

import { countrycode, thoiluong } from "../../filters";
import { makeStyles } from "@material-ui/core/styles";
import { useFetch } from "../../useFetch";

const default_filter = {
  genres: -1,
  country: 0,
  year: -1,
  runtime: 0,
  sortBy: 0,
};

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

const doFilter = (filter) => {
  const { genres, country, year, runtime, sortBy } = filter;

  const genres_init = genres === -1 ? "" : `&with_genres=${genres}`;
  const country_init =
    country === 0 ? "" : `&with_original_language=${countrycode[country].code}`;
  const year_init = year === -1 ? "" : `&primary_release_year=${year}`;
  const runtime_init =
    runtime === 0
      ? ""
      : runtime === 1
      ? `&with_runtime.lte=${thoiluong[runtime].value}`
      : runtime === 5
      ? `&with_runtime.gte=${thoiluong[runtime].value}`
      : `&with_runtime.gte=${thoiluong[runtime].value[0]}&with_runtime.lte=${thoiluong[runtime].value[1]}`;

  const sortBy_init =
    sortBy === 0
      ? ""
      : sortBy === 1
      ? `&sort_by=primary_release_date.desc`
      : `&sort_by=vote_average.desc`;

  const url_filter = `https://api.themoviedb.org/3/discover/movie?api_key=d4b3bfeaef8ead976d2edf092fb4857a&language=vi${genres_init}${country_init}${year_init}${runtime_init}${sortBy_init}`;
  return url_filter;
};

const Movies = (props) => {
  const { query } = props;
  const [filter, setFilter] = useState(default_filter);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isListView, setIsListView] = useState(false);

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handlePage = (event, value) => {
    setCurrentPage(value);

    console.log(value);
  };

  const url_filter = doFilter(filter);
  const url_query = `https://api.themoviedb.org/3/search/movie?api_key=d4b3bfeaef8ead976d2edf092fb4857a&language=vi&query=${query}&include_adult=false`;

  const url = query === "" ? url_filter : url_query;
  const url_withPage = url + `&page=${currentPage}`;

  const { data, pagesNumber } = useFetch(url_withPage);

  useEffect(() => {
    setTotalPage(pagesNumber);
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, query]);

  const classes = useStyles();

  return (
    <div className={styles.movies}>
      <Filters
        handleFilter={handleFilter}
        condition={filter}
        isListView={isListView}
        handleViewChange={setIsListView}
      />
      <Results results={data.results} isListView={isListView} />
      <div className={styles.pagination}>
        <Pagination
          color="secondary"
          classes={{ ul: classes.ul }}
          count={totalPage}
          page={parseInt(currentPage)}
          size="medium"
          onChange={handlePage}
        />
      </div>
    </div>
  );
};

export default Movies;
