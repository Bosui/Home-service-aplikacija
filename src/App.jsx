import React from 'react';
import { FaBroom, FaWrench } from 'react-icons/fa'; // Pridėk savo ikonų biblioteką
import styles from './App.module.scss'; // Importuojame stilius
import SearchBar from './components/SearchBar/SearchBar'; // Pridėkite SearchBar komponentą
import ServiceCard from './components/ServiceCard/ServiceCard';
import Topbar from './components/Topbar/Topbar';


const App = () => {
  return (
    <div>
      <Topbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Find Home Service/Repair
          Near You</h1>
        <h2>Explore Best Home Service & Repair near you</h2>
        <SearchBar /> {/* Perkelkite paieškos juostą čia */}
        <div className={styles.serviceContainer}>
          <ServiceCard title="Valymas" icon={<FaBroom />} />
          <ServiceCard title="Remontas" icon={<FaWrench />} />
          {/* Pridėk daugiau paslaugų kortelių, jei reikia */}
        </div>
      </main>
    </div>
  );
};

export default App;
