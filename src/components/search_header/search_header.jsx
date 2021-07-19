import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const searchHandler = () => {
    onSearch(inputRef.current.value);
  };

  const textArea = (e) => {
    if (e.code === "Enter") {
      searchHandler();
    }
  };
  const searchBtn = () => {
    searchHandler();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="search..."
        onKeyPress={textArea}
      />
      <button className={styles.btn} type="submit" onClick={searchBtn}>
        <img className={styles.btnImg} src="/images/search.png" alt="" />
      </button>
    </header>
  );
};

export default SearchHeader;
