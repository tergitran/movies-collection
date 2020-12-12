import React, { useEffect, useState } from "react";
import styles from "./Filters.module.css";
import { FaThList, FaTh } from "react-icons/fa";
import { useFetch } from "../../../useFetch";

import { nam, thoiluong, sapxep, countrycode } from "../../../filters.js";

const url_theloai =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=d4b3bfeaef8ead976d2edf092fb4857a&language=vi";

const Filters = (props) => {
  const { handleFilter, condition, isListView, handleViewChange } = props;

  const { data } = useFetch(url_theloai);

  const handleChange = (e) => {
    let type = e.target.name;
    let value = e.target.value;
    if (
      type === "year" ||
      type === "genres" ||
      type === "runtime" ||
      type === "sortBy"
    )
      value = parseInt(value);
    handleFilter({ ...condition, [type]: value });
  };

  let genres = [{ id: -1, name: "Phim - Tất cả -" }];
  const c = !Object.keys(data).length == 0;
  genres = c && data.genres ? [...genres, ...data.genres] : genres;

  return (
    <div className={styles.filters}>
      <div className={[styles.filter, styles.theloai].join(" ")}>
        <h1>thể loại</h1>
        <select name="genres" value={condition.genres} onChange={handleChange}>
          {genres.map((tloai) => (
            <option key={tloai.id} value={tloai.id}>
              {tloai.name.slice(5)}
            </option>
          ))}
        </select>
      </div>
      <div className={[styles.filter, styles.quocgia].join(" ")}>
        <h1>quốc gia</h1>
        <select
          name="country"
          value={condition.country}
          onChange={handleChange}
        >
          {countrycode.map((country, index) => (
            <option key={index} value={index}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className={[styles.filter, styles.nam].join(" ")}>
        <h1>năm</h1>
        <select name="year" value={condition.year} onChange={handleChange}>
          {nam.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className={[styles.filter, styles.thoiluong].join(" ")}>
        <h1>thời lượng</h1>
        <select
          name="runtime"
          value={condition.runtime}
          onChange={handleChange}
        >
          {thoiluong.map((tl) => (
            <option key={tl.id} value={tl.id}>
              {tl.name}
            </option>
          ))}
        </select>
      </div>
      <div className={[styles.filter, styles.sapxep].join(" ")}>
        <h1>sắp xếp</h1>
        <select name="sortBy" value={condition.sortBy} onChange={handleChange}>
          {sapxep.map((loai, index) => (
            <option key={index} value={index}>
              {loai}
            </option>
          ))}
        </select>
      </div>
      <div className={[styles.filter, styles.theloai].join(" ")}>
        <h1>hiển thị</h1>
        <div className={styles.icon}>
          <FaTh
            className={isListView ? null : styles.active}
            onClick={() => handleViewChange(false)}
          />
          <FaThList
            className={isListView ? styles.active : null}
            onClick={() => handleViewChange(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
