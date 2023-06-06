import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from "../styles/loginsignup.module.css";
import Image from "next/image";

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignInClick = () => setIsRightPanelActive(false);

  const handleSignUpClick = () => setIsRightPanelActive(true);

  return (
    <div className={styles.body}>
      <div className={`${styles.container} ${isRightPanelActive ? styles.rightPanelActive : ''} ${styles.bodyStyle}`}>
        <div className={styles.signUpContainer}>
          <form action="#" className={styles.flexForm}>
      
          <div className={styles.logoContainer}>
            <Image src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png" alt="" width={140} height={60}    className={styles.logo}/>      
      </div>
            <h1 className={styles.title}>Create Account</h1>
            <input className={styles.inputField} type="text" placeholder="UserName" />
            <input className={styles.inputField} type="email" placeholder="Email" />
            <input className={styles.inputField} type="password" placeholder="Password" />
            <input className={styles.inputField} type="password" placeholder="Confirm Password" />
            <button className={styles.btn} onClick={handleSignUpClick}>Sign Up</button>
          </form>
        </div>
        <div className={styles.signInContainer}>
          <form action="#" className={styles.flexForm}>
          <div className={styles.logoContainer}>
            <Image src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png" alt="" width={140} height={60}    className={styles.logo}/>      
      </div>
            <h1 className={styles.title2}>Sign in</h1>
            
            <div className={styles.socialContainer}>
              {/* <a href="#" className={`${styles.social} ${styles.links}`}><FontAwesomeIcon icon={faGooglePlusG} /></a> */}
            </div>
            <input className={styles.inputField} type="email" placeholder="Email" />
            <input className={styles.inputField} type="password" placeholder="Password" />
           
            <div className={styles.passContainer}>

            <a href="#" className={styles.link}>Forgot your password?</a>
            <a href="#" className={styles.link2}>Remeber password?</a>
           
           </div>
            <button className={styles.btn} onClick={handleSignInClick}>Sign In</button>
          </form>
        </div>
        <div className={styles.overlayContainer}>
          <div className={`${styles.overlay}`}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <h1 className={styles.slidingTitle}>Welcome Back!</h1>
              <p className={styles.normalText}>Use your personal info to login</p>
              <button className={`${styles.btnGhost} ${styles.btn}`} onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            
              <h1 className={styles.slidingTitle}>Welcome Back To Muslim Trivia!</h1>
              <p className={styles.normalText}>Enter your details to start up your dashboard!</p>
              <button className={`${styles.btnGhost} ${styles.btn}`} onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
