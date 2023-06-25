import React, { useState, useEffect } from 'react';
import styles from '../styles/Leaderboard.module.css';
import Image from 'next/image';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [score, setPoints] = useState(0);
  const [flag, setFlag] = useState('');

  useEffect(() => {
    fetchLeaderboardData();
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = `Bearer ${sessionStorage.getItem('token')}`;
      const config = {
        headers: { Authorization: token },
      };
      const response = await axios.get(
        'https://muslimtrivia.com/api/v1/auth/user',
        config
      );
      const { username, flag } = response.data;

      setUserName(username);
      setFlag(flag);
      setCurrentUser(response.data); // Set the current user
      console.log(response.data);

      fetchUserScore(username); // Fetch the user's score after we have the username
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserScore = async (username) => {
    try {
      const token = `Bearer ${sessionStorage.getItem('token')}`;
      const config = {
        headers: { Authorization: token },
      };
      const response = await axios.get(
        `https://muslimtrivia.com/api/v1/auth/current/score/${username}`,
        config
      );
      const score = response.data;
      setPoints(score);
      console.log('Score:', score);

    } catch (error) {
      console.error(error);
    }
  };


  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('https://muslimtrivia.com/api/v1/auth/topUsers?limit=20');
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard data');
      }
      const data = await response.json();

      // Exclude currentUser from the fetched data
      const filteredData = data.filter((user) => user.username !== currentUser?.username);

      setLeaderboardData(filteredData);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const flagApiUrl = (countryCode) =>
    `https://flagcdn.com/64x48/${countryCode.toLowerCase()}.png`;

  const leaderboardDataWithCurrentUser = [...leaderboardData].filter(Boolean);

  // Sort the leaderboard data based on the score in descending order
  const sortedData = [...leaderboardDataWithCurrentUser].sort((a, b) => b.score - a.score);

  const currentUserPosition = sortedData.findIndex(
    (user) => user.username === currentUser?.username
  );

  const adjustedPosition = currentUserPosition >= 0 ? currentUserPosition + 1 : 0;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.header}>Leaderboard</h1>
        </div>
        <div className={styles.leaderboard}>
          {sortedData.slice(0, 20).map((user, i) => (
            <div
              key={user.username}
              className={`${styles.user} ${
                i < 3 ? styles['top' + (i + 1)] : styles['top' + (i + 4)]
              }`}
            >
              <span className={styles.rank}>{i + 1}</span>
              <div className={styles.flagContainer}>
                <Image
                  src={flagApiUrl(user.flag)}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.flag}
                />
              </div>
              <span className={styles.name}>{user.username}</span>
              <span className={styles.points}>{user.score}</span>
            </div>
          ))}
          {currentUser && currentUserPosition >= 20 && (
            <div className={` ${styles.currentUser}`}>
              <span className={styles.rank}>{adjustedPosition}</span>
              <div className={styles.flagContainer}>
                <Image
                  src={flagApiUrl(currentUser.flag)}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.flag}
                />
              </div>
              <span className={styles.name}>{currentUser.username}</span>
              <span className={styles.points}>{score}</span>
            </div>
          )}
        </div>
        {currentUser && currentUserPosition < 20 && (
          <div className={` ${styles.currentUser}`}>
            <span className={styles.rank}>{adjustedPosition}</span>
            <div className={styles.flagContainer}>
              <Image
                src={flagApiUrl(currentUser.flag)}
                alt=""
                width={50}
                height={50}
                className={styles.flag}
              />
            </div>
            <span className={styles.name}>{currentUser.username}</span>
            <span className={styles.points}>{score}</span>
          </div>
        )}
        {!currentUser && (
          <div className={styles.currentUser}>
            <div className={styles.flagContainer} />
            <span className={styles.namee}>Login to climb the ranks</span>
            <span className={styles.points}>-</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
