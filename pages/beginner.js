import React from 'react';
import styles from '../styles/beginner.module.css';
import Image from 'next/image';

const Beginner = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.bottomContainer}>
      <div className={styles.logo} onClick={() => router.push('/')}>
        <Image
          src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png"
          alt=""
          width={140}
          height={60}
          className={styles.logo}
        />
      </div> 

      <button className={styles.startButton}>Click to Start the Game</button>
       </div>
      <div className={styles.pointSystemContainer}>
        <Image
          src="/img/rulesss.jpg"
          alt="Point System"
          width={600}
          height={680}
          className={styles.pointSystemImage}
        />

        <Image
          src="/img/pointsss.jpg"
          alt="Point System"
          width={600}
          height={680}
          className={styles.pointSystemImage}
        />
      </div>
      <span className={styles.bottowmContainer}>
 
sadsa
   </span>
    </div>
    
  );
}

export default Beginner;
