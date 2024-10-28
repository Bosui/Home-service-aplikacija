import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logoipsum.png';
import styles from './Topbar.module.scss';

const Topbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />

      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </nav>
      <div className={styles.loginButtonContainer}>
        <button className={styles.loginButton} onClick={handleLoginClick}>Login</button>
      </div>
      <div className={styles.signUpButtonContainer}> {/* Pridėtas Sign Up mygtuko konteineris */}
        <button className={styles.signUpButton} onClick={handleSignUpClick}>Sign Up</button>
      </div>
    </div>
  );
};

export default Topbar;
