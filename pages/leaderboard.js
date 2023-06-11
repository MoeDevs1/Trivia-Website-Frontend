import React, { useEffect, useRef } from 'react';
import styles from '../styles/Leaderboard.module.css';
import Image from 'next/image';

const Leaderboard = () => {
  const leaderboardData = [...Array(21)].map((_, i) => ({name: `User ${i + 1}`, points: Math.floor(Math.random() * 1000)}));
  leaderboardData.sort((a, b) => b.points - a.points);

  const getImage = (index) => {
    switch (index) {
      case 0:
        return "/img/pngwing.com (5).png";
      case 1:
        return "/img/Untitled_design__1_-removebg-preview.png";
      case 2:
        return "/img/Untitled_design-removebg-preview.png";
      default:
        return null;
    }
  }

  return (
    <div className={styles.container2}>
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.header}>Leaderboard</h1>
  
      </div>
      <div className={styles.leaderboard}>
        {leaderboardData.slice(0, 20).map((user, i) => (
          <div
            key={user.name}
            className={`${styles.user} ${i < 3 ? styles['top' + (i + 1)] : styles['top' + (i + 4)]}`}
          >
            <span className={styles.rank}>{i + 1}</span>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.points}>{user.points}</span>
            {getImage(i) &&
              <Image
                src={getImage(i)}
                alt=""
                width={50}
                height={50}
                className={styles.logo}
              />
            }
          </div>
        ))}
      </div>
      <div className={styles.leaderboardFixed}>
        {leaderboardData.slice(20).map((user, i) => (
          <div
            key={user.name}
            className={`${styles.user} ${styles.currentUser}`}
          >
            <span className={styles.rank}>{i + 21}</span>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.points}>{user.points}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Leaderboard;
