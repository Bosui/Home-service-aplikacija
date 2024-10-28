import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './Container.module.scss';

const CardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <ServiceCard 
        title="Cleaning" 
        icon={<img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-cleaning-cleaning-icongeek26-linear-colour-icongeek26.png" alt="Cleaning Icon" />} 
      />
      <ServiceCard 
        title="Repair" 
        icon={<img src="https://img.icons8.com/office/64/maintenance.png" alt="Repair Icon" />} 
      />
      <ServiceCard 
        title="Painting" 
        icon={<img src="https://img.icons8.com/doodle/64/paint-brush--v1.png" alt="Painting Icon" />} 
      />
      <ServiceCard 
        title="Shifting" 
        icon={<img src="https://img.icons8.com/external-filled-outline-design-circle/64/external-Shifting-Truck-home-repair-and-maintenance-filled-outline-design-circle.png" alt="Shifting Icon" />} 
      />
      <ServiceCard 
        title="Plumbing" 
        icon={<img src="https://img.icons8.com/plasticine/64/plumbing.png" alt="Plumbing Icon" />} 
      />
      <ServiceCard 
        title="Electric" 
        icon={<img src="https://img.icons8.com/external-others-phat-plus/64/external-electric-electric-vehicles-color-line-others-phat-plus-6.png" alt="Electric Icon" />} 
      />
    </div>
  );
};

export default CardContainer;
