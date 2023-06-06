import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import axios from 'axios';
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userEmail, setUserEmail] = useState(null); // State to store the user's email
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const token = sessionStorage.getItem('token'); // Retrieve the token from session storage
        const response = await axios.post('http://localhost:3000/api/checkToken', { token }); // Make a POST request to the API endpoint
        const { email } = response.data;
        setUserEmail(email);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserEmail();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLoginClick = () => {
    router.push('/loginsignup?#');
  };

  const handleLogout = () => {
    sessionStorage.removeItem("sessionExpiration");
    sessionStorage.removeItem("token");
    setUserEmail(null);
  };
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
        <li className={styles.navLink} onClick={() => router.push('/contact')}>Contact</li>
      </ul>
      <ul className={styles.authLinks}>
        {userEmail ? (
          <li className={styles.navLink} onClick={() => setShowDropdown(!showDropdown)}>
            {userEmail}
            <FaCaretDown className={`${styles.dropDown} ${styles.dropdownPosition}`} />
            {showDropdown && (
              <ul className={styles.dropdownMenu}>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </li>
        ) : (
          <li className={styles.navLink} onClick={handleLoginClick}>
            Login <FaCaretDown className={`${styles.dropDown} ${styles.dropdownPosition}`} />
          </li>
        )}
      </ul>



      <FaBars className={styles.menuIcon} onClick={toggleMenu} />

      {showMenu && (
        <ul className={styles.mobileMenu}>
          <li className={styles.navLink} onClick={() => router.push('/')}>Home</li>
          <li className={styles.navLink} onClick={() => router.push('/leaderboard')}>Leaderboard</li>
          <li className={styles.navLink} onClick={() => router.push('/contact')}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
