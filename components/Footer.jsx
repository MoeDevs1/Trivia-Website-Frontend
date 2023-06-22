import React from 'react';
import styles from  "../styles/footer.module.css"
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.line}></div>  

      <div className={styles.column}>
        <img src="/img/Logo.png" alt="Logo" className={styles.logo} />
        <p className={styles.description}>
        Welcome to Muslim Trivia! I hope you have a wonderful time exploring and expanding your knowledge. Let the journey begin as we delve into the fascinating world of Islamic history, culture, and traditions. Enjoy the experience!
</p>
         
      </div>
      <div className={`${styles.column} ${styles.links}`}>
      <h3 className={`${styles.title} ${styles.firstTitle}`}>Links</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="/" className={styles.link}>Home
            </a>
          </li>
          <li className={styles.item}>
            <a href="/beginner" className={styles.link}> Beginner Game Mode
            </a>
          </li>
          <li className={styles.item}>
            <a href="/intermediate" className={styles.link}> Intermediate Game Mode
            </a>
          </li>
          <li className={styles.item}>
            <a href="/advanced" className={styles.link}>Advanced Game Mode
            </a>
          </li>
          <li className={styles.item}>
            <a href="/expert" className={styles.link}> Expert Game Mode
            </a>
          </li>
        </ul>
      </div>

   

        <div className={styles.column}>
          <p className={styles.text}>
     
           <MdEmail className={styles.icon} />
           MoeDevelopment@Gmail.com
          </p>
     
       </div>


      {/* Footer bottom section */}
      <div className={styles.bottom}>
      {/* <Image className={styles.text} src="/img/credit-card-png-23535.png" alt="name" width="200" height="80" /> */}
         <p className={styles.text}>Created by Devs© 2023</p>
      </div>

 
    </div>
  );
};

export default Footer;