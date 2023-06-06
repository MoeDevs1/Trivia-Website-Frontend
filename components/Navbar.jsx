import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.loogo}>
            <Image src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png" alt="" width={140} height={60}    className={styles.logo}/>


            
      </div>

      <ul className={styles.navLinks}>
        <li className={styles.navLink}>Home</li>
        <li className={styles.navLink}>Leaderboard</li>
        <li className={styles.navLink}>Contact</li>
      </ul>

      <ul className={styles.authLinks}>
        <li className={styles.navLink}>Signup</li>
        <li className={styles.dash}>/</li>
         <li className={styles.navLinkLogin}> Login</li>
      </ul>

      <FaBars className={styles.menuIcon} onClick={toggleMenu} />

      {showMenu && (
        <ul className={styles.mobileMenu}>
          <li className={styles.navLink}>Home</li>
          <li className={styles.navLink}>Leaderboard</li>
          <li className={styles.navLink}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
