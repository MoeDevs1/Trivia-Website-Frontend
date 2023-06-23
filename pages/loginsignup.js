import React, { useState, useEffect } from "react";
import styles from "../styles/loginsignup.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import axios from 'axios';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Select from 'react-select';
 

const setSessionExpiration = () => {
  const expirationDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
  const expirationTime = new Date().getTime() + expirationDuration;

  sessionStorage.setItem("sessionExpiration", expirationTime);
  setTimeout(logout, expirationDuration); // Set the timeout to log the user out after the session expires
};

const countries = [
  { value: 'us', label: '🇺🇸 United States' },
  { value: 'gb', label: '🇬🇧 United Kingdom' },
  { value: 'ca', label: '🇨🇦 Canada' },
  { value: 'au', label: '🇦🇺 Australia' },
  { value: 'fr', label: '🇫🇷 France' },
  { value: 'de', label: '🇩🇪 Germany' },
  { value: 'jp', label: '🇯🇵 Japan' },
  { value: 'in', label: '🇮🇳 India' },
  { value: 'cn', label: '🇨🇳 China' },
  { value: 'br', label: '🇧🇷 Brazil' },
  { value: 'sd', label: '🇸🇩 Sudan' },
  { value: 'sa', label: '🇸🇦 Saudi Arabia' },
  { value: 'ma', label: '🇲🇦 Morocco' },
  { value: 'eg', label: '🇪🇬 Egypt' },
  { value: 'tr', label: '🇹🇷 Turkey' },
  { value: 'id', label: '🇮🇩 Indonesia' },
  { value: 'pk', label: '🇵🇰 Pakistan' },
  { value: 'bd', label: '🇧🇩 Bangladesh' },
];

const registerUser = async (token, router) => {
  // Register the user using the token
  await axios.post('https://18.223.98.179:8080/api/v1/auth/register/google', { token })
    .then(response => {
      const { data } = response;
      const { token } = data;

      // Store the token in sessionStorage
      sessionStorage.setItem("token", token);

      // Storing token in a cookie
      document.cookie = `token=${token}; path=/;`;      

      setSessionExpiration(); // Set the session expiration token after successful registration\

      router.push('/'); // Redirect to the home page
    })
    .catch(error => {
      console.error(error);
    });
};





const loginUser = async (token, router) => {
  // Login the user using the token
  await axios.post('https://18.223.98.179:8080/api/v1/auth/login/google', { token })
    .then(response => {
      const { data } = response;
      const { token } = data;

      // Store the token in sessionStorage
      sessionStorage.setItem("token", token);
      document.cookie = `token=${token}; path=/;`;

      setSessionExpiration(); // Set the session expiration token after successful login

      router.push('/'); // Redirect to the home page
    })
    .catch(error => {
      console.error(error);
    });
};

const logout = () => {
  // Clear the session data and log the user out
  sessionStorage.removeItem("sessionExpiration");
  sessionStorage.removeItem("token"); // Remove the token
  setIsLoggedIn(false);
};

const GoogleSignupPage = () => {
  const router = useRouter();

  const onGoogleSuccess = async (response) => {
    const tokenId = response.credential;

    if (!tokenId) {
      console.log('TokenId not available');
      return;
    }

    // Register the user using the tokenId
    await registerUser(tokenId, router); // Pass the router as an argument
  }
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
 
  return (

    
    <div>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          text="continue_with"
          onSuccess={onGoogleSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
          height="400px"
          width="300"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

const GoogleLoginPage = () => {
  const router = useRouter();

  const onGoogleSuccess = async (response) => {
    const tokenId = response.credential;

    if (!tokenId) {
      console.log('TokenId not available');
      return;
    }

    // Login the user using the tokenId
    await loginUser(tokenId, router); // Pass the router as an argument
  }
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  return (
    <div>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          text="sign_in"
          onSuccess={onGoogleSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
          width="300"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInError, setSignInError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(null); // Track the selected flag
  const [flagError, setFlagError] = useState(""); // Error state for flag selection
  const router = useRouter();

  useEffect(() => {
    const sessionExpiration = sessionStorage.getItem("sessionExpiration");
    const currentTime = new Date().getTime();

    // Check if the "Remember Me" checkbox should be checked
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const shouldRemember = storedEmail && storedPassword;
    setRememberMe(shouldRemember);

    if (shouldRemember) {
      // Populate the input fields with the stored email and password
      setSignInEmail(storedEmail);
      setSignInPassword(storedPassword);
    }

    if (sessionExpiration && currentTime < sessionExpiration) {
      // Session has not expired, user is logged in
      setIsLoggedIn(true);
    } else {
      // Session has expired, log the user out
      logout();
    }
  }, []);

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
    setIsLoggedIn(false); // Reset the login state when switching between panels
  };

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
    setIsLoggedIn(false); // Reset the login state when switching between panels
  };

  const handleSignInEmailChange = (event) => {
    setSignInEmail(event.target.value);
    setSignInError(""); // Clear the error message when the email field changes
  };

  const handleSignInPasswordChange = (event) => {
    setSignInPassword(event.target.value);
    setSignInError(""); // Clear the error message when the password field changes
  };

  const login = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true); // Show loading effect

      const response = await axios.post('https://trivia-2026648991.us-east-2.elb.amazonaws.com/api/v1/auth/authenticate', {
        email: signInEmail,
        password: signInPassword,
      });

      // Handle success
      const { token } = response.data;
      sessionStorage.setItem("token", token);
      document.cookie = `token=${token}; path=/;`;

      setSessionTimeout(); // Set the session expiration
      setIsLoggedIn(true); // Set the login state

      if (rememberMe) {
        // Store email and password in localStorage
        localStorage.setItem("email", signInEmail);
        localStorage.setItem("password", signInPassword);
      } else {
        // Clear email and password from localStorage
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      router.push('/'); // Redirect to the home page
    } catch (error) {
      console.error(error);

      // Handle error
      if (error.response && error.response.data && error.response.data.message) {
        setSignInError("Invalid credentials. Please check your email and password.");
      } else {
        console.log('An error occurred.');
      }
    } finally {
      setIsLoading(false); // Hide loading effect
    }
  };

  const logout = () => {
    // Clear the session data and log the user out
    sessionStorage.removeItem("sessionExpiration");
    sessionStorage.removeItem("token"); // Remove the token
    setIsLoggedIn(false);
  };

  const setSessionTimeout = () => {
    const sessionDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    const sessionExpiration = new Date().getTime() + sessionDuration;

    sessionStorage.setItem("sessionExpiration", sessionExpiration);
    setTimeout(logout, sessionDuration); // Set the timeout to log the user out after the session expires
  };

  const signUp = async (event) => {
    event.preventDefault();
  
    const userName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;
  
    if (!selectedFlag) {
      setFlagError("You must choose a flag"); // Set the flag error if no flag is selected
      return;
    } else {
      setFlagError(""); // Clear the flag error if a flag is selected
    }
  
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      setEmailError("");
      setUsernameError("");
      return;
    }
  
    if (userName.length < 4 || !containsTwoLetters(userName)) {
      setUsernameError("Username must be at least 4 characters long and contain at least 2 letters");
      setEmailError("");
      setPasswordError("");
      return;
    }
  
    if (password.length < 5 || !containsTwoLetters(password)) {
      setPasswordError("Password must be at least 5 characters long and contain at least 2 letters");
      setEmailError("");
      setUsernameError("");
      return;
    }
  
    try {
      setIsLoading(true); // Show loading effect
  
      const response = await axios.post('https://trivia-2026648991.us-east-2.elb.amazonaws.com/api/v1/auth/register', {
        userName,
        email,
        password,
        flag: selectedFlag.value// Pass the selected flag value to the flag field in the request payload
      });
  
      // Handle success
      const { token } = response.data;
      sessionStorage.setItem("token", token);
      document.cookie = `token=${token}; path=/;`;

      setSessionTimeout(); // Set the session expiration
      setIsLoggedIn(true); // Set the login state
  
      router.push('/'); // Redirect to the home page
    } catch (error) {
      console.error(error);
  
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes("email")) {
          setEmailError(errorMessage);
          setUsernameError("");
          setPasswordError("");
        } else if (errorMessage.includes("username")) {
          setUsernameError(errorMessage);
          setEmailError("");
          setPasswordError("");
        } else {
          setEmailError("");
          setUsernameError("");
          setPasswordError(errorMessage);
        }
      } else {
        console.log('An error occurred.');
      }
    } finally {
      setIsLoading(false); // Hide loading effect
    }
  };
  
  const containsTwoLetters = (str) => {
    const letterCount = str.replace(/[^a-zA-Z]/g, "").length;
    return letterCount >= 2;
  };

  const isScreenLessThan500 = typeof window !== 'undefined' && window.innerWidth < 500;

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '10px', // Adjust the height as needed
    }),
    menu: (provided, state) => ({
      ...provided,
      marginTop: '5px', // Remove the default margin
    }),
    menuList: (provided, state) => ({
      ...provided,
      marginTop: '10px',
      maxHeight: '170px', // Adjust the height as needed
    }),
  };

  return (
    <div className={styles.body}>
      {!isLoggedIn ? (
        <div className={`${styles.container} ${isRightPanelActive ? styles.rightPanelActive : ''} ${styles.bodyStyle}`}>
          <div className={styles.signUpContainer}>
            <form action="#" className={styles.flexForm} onSubmit={signUp}>
              <h1 className={styles.title}>Create Account</h1>

              <div className={styles.inputContainer}>
                <input className={styles.inputField} type="text" placeholder="UserName" />
                <span className={styles.icon}><BsFillPersonFill /></span>
              </div>

              {usernameError && <span className={`${styles.errorMessage} ${styles.error}`}>{usernameError}</span>}

              <div className={styles.inputContainer}>
                <input className={styles.inputField} type="email" placeholder="Email" />
                <span className={styles.icon}><MdEmail /></span>
              </div>

              {emailError && <span className={`${styles.errorMessage} ${styles.error}`}>{emailError}</span>}

              <div className={styles.inputContainer}>
                <input className={styles.inputField} type="password" placeholder="Password" />
                <span className={styles.icon}><AiFillLock /></span>
              </div>

              <div className={styles.inputContainer}>
                <input className={styles.inputField} type="password" placeholder="Confirm Password" />
                <span className={styles.icon}><AiFillLock /></span>
              </div>

              {passwordError && <span className={`${styles.errorMessage} ${styles.error}`}>{passwordError}</span>}

              <Select
                options={countries}
                className={styles.select}
                placeholder="Select your country..."
                onChange={(option) => setSelectedFlag(option)} // Update the selected flag state
                styles={customStyles} // Add the custom styles object
              />

              {flagError && <span className={`${styles.errorMessage} ${styles.error}`}>{flagError}</span>}

              <button className={styles.Signupbtn} type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign Up"}
              </button>

              <GoogleSignupPage /> {/* Google Signup component */}
            </form>
          </div>
          <div className={styles.signInContainer}>
            <form action="#" className={styles.flexForm} onSubmit={login}>
              <h1 className={styles.title2}>Sign in</h1>
              <div className={styles.socialContainer}>
                {/* <a href="#" className={`${styles.social} ${styles.links}`}><FontAwesomeIcon icon={faGooglePlusG} /></a> */}
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={styles.inputField2}
                  type="email"
                  placeholder="Email"
                  value={signInEmail}
                  onChange={handleSignInEmailChange}
                />
                <span className={styles.icon}><MdEmail /></span>
              </div>

              <div className={styles.inputContainer}>
                <input
                  className={styles.inputField2}
                  type="password"
                  placeholder="Password"
                  value={signInPassword}
                  onChange={handleSignInPasswordChange}
                />
                <span className={styles.icon}><AiFillLock /></span>
              </div>

              {signInError && <span className={`${styles.errorMessage} ${styles.error}`}>{signInError}</span>}

              <div className={styles.MiscContainer}>
                <label className={styles.rememberPasswordLabel}>
                  <input
                    type="checkbox"
                    className={styles.rememberPasswordCheckbox}
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Remember Password
                </label>
                <div className={styles.forgotPasswordLink}>
                  <a href="/forgot-password">Forgot password?</a>
                </div>
              </div>

              <button className={styles.btnLogin} type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign In"}
              </button>

              <div className={styles.line}></div>

              <GoogleLoginPage /> {/* Google Login component for login */}
            </form>
          </div>

          <div className={styles.overlayContainer}>
            <div className={`${styles.overlay}`}>
              <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                <div className={styles.logoContainer} >
                  <Image src="/img/imageedit_20_6995547124.png" alt="" width={100} height={50} className={styles.logo} />
                </div>
                <h1 className={styles.slidingTitle}>Welcome Back</h1>
                <p className={styles.normalText}>Use your personal info to login</p>
                <button className={`${styles.btnGhost} ${styles.btn}`} onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                <div className={styles.logoContainer2}>
                  <Image src="/img/imageedit_20_6995547124.png" alt="" width={100} height={50} className={styles.logo} />
                </div>
                <h1 className={styles.slidingTitle2}>Hello, Friend!</h1>
                <p className={styles.normalText}>Enter your personal details and start journey with us</p>
                <button className={`${styles.btnGhost} ${styles.btn}`} onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.loggedInContainer} ${styles.bodyStyle}`}>
          <h1 className={styles.loggedInTitle}>Welcome back!</h1>
          <p className={styles.loggedInText}>You are logged in.</p>
          <button className={styles.loggedInButton} onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;