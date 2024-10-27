import React from 'react';
import logo from '../../assets/logoipsum.png';
import styles from './Topbar.module.scss';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.logo}>
         <img src={logo} alt="Logo" />
        <h1>HOME Service</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Pradžia</a></li>
          <li><a href="/about">Apie</a></li>
          <li><a href="/services">Paslaugos</a></li>
          <li><a href="/contact">Kontaktai</a></li>
        </ul>
      </nav>
      <div className={styles.loginButtonContainer}>
        <button className={styles.loginButton}>Prisijungti</button>
      </div>
    </div>
  );
};

export default Topbar;
