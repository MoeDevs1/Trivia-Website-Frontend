import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/beginner');
  };

  return (
    <div className={styles.Container}>
      <div className={styles.bannerContainer}>
        <video autoPlay muted className={styles.videoWrapper}>
          <source src="/vid/FINL.mp4" type="video/mp4" className={styles.videoWrapper} />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.gameModeTitle}>Game Modes</div>
      <div className={styles.line}></div>

      <div className={styles.gameModeContainer}>
    
          <Image
          onClick={handleLoginClick}
            src="/img/bgn.jpg"
            alt="easy"
            width={330}
            height={550}
            className={styles.skillImagee}
          />
 
        <Image
          src="/img/adv.jpg"
          alt=""
          width={330}
          height={550}
          className={styles.skillImage}
        />
        <Image
          src="/img/intr.jpg"
          alt="Intermediate"
          width={330}
          height={550}
          className={styles.skillImage}
        />
        <Image
          src="/img/hrd.jpg"
          alt="Expert"
          width={330}
          height={550}
          className={styles.skillImage}
        />
      </div>
    </div>
  );
};

export default Index;
