import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data: ', formData);
  };

  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.title}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.signupButton}>Sign Up</button>
      </form>
      <Link to="/login" className={styles.link}>Already have an account? Login here</Link>
    </div>
  );
};

export default SignUp;
