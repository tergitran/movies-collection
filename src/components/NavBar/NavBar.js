import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isSideBar, setIsSidebar] = useState(false);

  const { query, handleQuery } = props;
  function handleToggleSideBar() {
    setIsSidebar(!isSideBar);
  }

  const nav = useRef(null);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    console.log(prevScrollpos);

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        nav.current.style.backgroundColor = "rgba(52,11,103, 0)";
      } else {
        nav.current.style.backgroundColor = "rgba(52,11,103, 0.9)";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div ref={nav} className={styles["navbar"]}>
      <div className={styles["navbar-logo"]}>
        <Link to="/">
          <img src="https://fontmeme.com/permalink/201205/445a9aaccfbf169f0958602c6f4038f4.png" />
        </Link>
      </div>
      <div className={styles["navbar-tinylogo"]}>
        <Link to="/">
          <img src="https://fontmeme.com/permalink/201205/c0152405984f2c6c856de28935b98a55.png" />
        </Link>
      </div>
      <div className={styles["navbar-menu"]}>
        <div className={styles["navbar-start"]}>
          <a href="#">Phim lẻ</a>
          {/* <a href="#">{content}</a> */}
          <a href="#">Phim bộ</a>
          <a href="#">Giới thiệu</a>
          <input
            type="text"
            placeholder="Search by name"
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
          />
        </div>
        <div className={styles["navbar-end"]}>
          <a href="#">Đăng nhập</a>
          <FaBars className={styles.icon} onClick={handleToggleSideBar} />
        </div>
      </div>
      <div
        className={
          isSideBar
            ? [styles.backdrop, styles.showBackDrop].join(" ")
            : styles.backdrop
        }
      ></div>
      <div
        className={
          isSideBar
            ? [styles.sidebar, styles.showSideBar].join(" ")
            : styles.sidebar
        }
      >
        <div className={styles["sidebar-items"]}>
          <a href="#">Phim lẻ</a>
          <a href="#">Phim bộ</a>
          <a href="#">Giới thiệu</a>
          <div className={styles.horizonline}></div>
          <a href="#">Đăng nhập</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
