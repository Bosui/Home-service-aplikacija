import React, { useState } from 'react';
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Čia įtraukite prisijungimo logiką
    if (email === "test@example.com" && password === "password") {
      // Pavyzdinė sėkmės logika
      console.log('Prisijungimas sėkmingas!');
      setError('');
    } else {
      setError('Neteisingas el. paštas arba slaptažodis');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Prisijungti</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.formGroup}>
          <label htmlFor="email">El. paštas</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Slaptažodis</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className={styles.loginButton}>Prisijungti</button>
      </form>
      <div className={styles.links}>
        <a href="/register" className={styles.link}>Neturite paskyros? Registruokitės!</a>
        <a href="/forgot-password" className={styles.link}>Pamiršote slaptažodį?</a>
      </div>
    </div>
  );
};

export default Login;
