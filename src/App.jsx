import React from 'react';
import styles from './App.module.scss';
import CardContainer from './components/CardContainer/CardContainer';
import Container from './components/Container/Container';
import SearchBar from './components/SearchBar/SearchBar';
import Topbar from './components/Topbar/Topbar';

const App = () => {
  return (
    <div>
      <Topbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Find Home Service/Repair Near You</h1>
        <h2 className={styles.subtitle}>Explore Best Home Service & Repair near you</h2>
        <SearchBar />
        <Container /> 
        <p className={styles.popularBusinesses}>Popular businesses</p>
        <div>
          <CardContainer />
        </div>
      </main>
    </div>
  );
};

export default App;
