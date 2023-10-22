import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import axios from 'axios';
import { FaCaretDown } from 'react-icons/fa'  

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const [userEmail, setUserEmail] = useState(null);
  const [username, setUsername] = useState(null); // New State for username
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = `Bearer ${sessionStorage.getItem('token')}`; 
        const config = {
          headers: { Authorization: token }
        };
        const response = await axios.get('https://54.86.135.3:443/api/v1/auth/user', config);
        const { email, username } = response.data;
        setUserEmail(email);
        setUsername(username);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUserData();
  
    // Setting a listener to sessionStorage
    const storageListener = () => {
      fetchUserData();
    };
  
    window.addEventListener('storage', storageListener);
  
    // Make sure to remove the listener when the component is unmounted
    return () => window.removeEventListener('storage', storageListener);
  });
  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLoginClick = () => {
    router.push('/loginsignup?#');
  };
  const handleSetting = () => {
    router.push('/setting?#');
  };

  const handleLogout = () => {
    sessionStorage.removeItem("sessionExpiration");
    sessionStorage.removeItem("token");
    setUserEmail(null);
    window.location.reload(); // Refresh the page
  };
// ... same as before ...

return (
  <nav className={styles.navBar}>
    <div className={styles.logo} onClick={() => router.push('/')}>
      <Image
        src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png"
        alt=""
        width={140}
        height={60}
        className={styles.logo}
      />
    </div>

    <ul className={styles.navLinks}>
      <li className={styles.navLink} onClick={() => router.push('/')}>Home</li>
      <li className={styles.navLink} onClick={() => router.push('/leaderboard')}>Leaderboard</li>
    </ul>

    <ul className={`${styles.authLinks} ${styles.desktopWelcomeUser}`}>
      {username ? (
        <li className={styles.navLink} onClick={() => setShowDropdown(!showDropdown)}>
          Welcome, {username}
          {showDropdown && (
            <ul className={styles.dropdownMenu}>
              <li onClick={handleLogout}>Logout</li>
              <li onClick={handleSetting}>Setting</li>
            </ul>
          )}
        </li>
      ) : (
        <li className={styles.navLink} onClick={handleLoginClick}>
          Login
        </li>
      )}
    </ul>
    
    <div className={styles.menuIconContainer}>
      <FaBars className={styles.mensuIcon} onClick={toggleMenu} />
     </div>

    {showMenu && (
      <ul className={`${styles.mobileMenu} ${styles.mobileWelcomeUser}`}>
        <li>Welcome, {username}</li>
        <li className={styles.navLink} onClick={() => router.push('/')}>Home</li>
        <li className={styles.navLink} onClick={() => router.push('/leaderboard')}>Leaderboard</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    )}
  </nav>
);
};

export default Navbar;
