import React from 'react';
import styles from '../styles/Home.module.css';

const Index = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.bannerContainer}>
        <video autoPlay muted className={styles.videoWrapper}>
          <source src="/vid/647e2ab1447f72001355d1b1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Index;
