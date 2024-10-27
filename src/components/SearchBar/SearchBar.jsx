import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <form className={styles.searchForm}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Ieškoti paslaugų..."
      />
      <button type="submit" className={styles.searchButton}>
        Paieška
      </button>
    </form>
  );
};

export default SearchBar;
