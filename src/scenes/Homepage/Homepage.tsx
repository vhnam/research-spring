import React from 'react';

import styles from './Homepage.module.css';

import imgVincentBach from '../../assets/img/vincent-bach.jpg';

const Homepage = () => (
  <>
    <div className={styles.container}>
      <div className={styles.jumbotron}>
        <h1 className={styles.heading}>Vincent Bach</h1>
        <p className={styles.description}>WHEN YOU GO BACH, YOU GO FORWARD!</p>
      </div>
      <div className={styles.thumbnail}>
        <img src={imgVincentBach} alt="Vincent Bach" />
      </div>
    </div>
    <p className={styles.note}>Inspired by Sarah Tan</p>
  </>
);

export default Homepage;
