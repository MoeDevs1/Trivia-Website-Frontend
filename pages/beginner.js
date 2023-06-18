import React from 'react';
import styles from '../styles/beginner.module.css';
import Image from 'next/image';

const Beginner = () => {
  return (
    <div className={styles.container}>
     
     <div className={styles.buttonWrapper}>
      <button className={styles.startButton}>Click to Start the Game</button>
      </div>
      <div className={styles.pointSystemContainer}>
        <Image
          src="/img/ruless.jpg"
          alt="Point System"
          width={600}
          height={680}
          className={styles.pointSystemImagee}
        />

        <Image
          src="/img/pointss.jpg"
          alt="Point System"
          width={600}
          height={680}
          className={styles.pointSystemImage}
        />
      </div>
    </div>
  );
}

export default Beginner;
