import React from 'react';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ icon, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};

export default ServiceCard;
