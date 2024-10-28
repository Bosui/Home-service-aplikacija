import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input 
                type="text" 
                className={styles.searchInput} 
                placeholder="Search for services..." 
            />
            <button className={styles.searchButton}>
                <img 
                    src="https://img.icons8.com/ios-filled/24/000000/search.png" 
                    alt="Search" 
                />
            </button>
        </div>
    );
};

export default SearchBar;
