import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const handleBeginnerClick = () => {
    router.push('/beginner');
  };
  const handleExpertClick = () => {
    router.push('/expert');
  };
  const handleIntermediateClick = () => {
    router.push('/intermediate');
  };
  const handleAdvancedClick = () => {
    router.push('/advanced');
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

      <div className={styles.backgroundContainer}>

        <Image
          onClick={handleBeginnerClick}
          src="/img/1.jpg"
          alt="easy"
          width={330}
          height={550}
          className={styles.skillImage}
        />


        <Image
          onClick={handleIntermediateClick}

          src="/img/2.jpg"
          alt=""
          width={330}
          height={550}
          className={styles.skillImage}
        /> 
        <Image
          onClick={handleAdvancedClick}

          src="/img/3.jpg"
          alt="Intermediate"
          width={330}
          height={550}
          className={styles.skillImage}
        />
        <Image
          onClick={handleExpertClick}

          src="/img/4.jpg"
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
