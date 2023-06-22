import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiFillSound } from 'react-icons/ai';
import { RiKey2Line } from 'react-icons/ri';
import { AiFillLock } from 'react-icons/ai';
import axios from 'axios';
import { BsFillPersonFill, BsXLg } from 'react-icons/bs';
import styles from '../styles/setting.module.css';
import Image from 'next/image';
import { BsCheck2Circle } from 'react-icons/bs';

import Select from 'react-select';

const Setting = () => {
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [teleport, setTeleport] = useState(false);
  const router = useRouter();
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userExistError, setUserExistError] = useState(false);
  const [success, setSuccess] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [activeButton, setActiveButton] = useState('User profile');
  const [flag, setFlag] = useState('');
  const flagApiUrl = (countryCode) => `https://flagcdn.com/64x48/${countryCode}.png`;
  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailExistsError, setEmailExistsError] = useState(false);
  const [newFlag, setNewFlag] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [changeType, setChangeType] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [flagUrl, setFlagUrl] = useState('');

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

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '10px',
    }),
    menu: (provided, state) => ({
      ...provided,
      marginTop: '5px',
    }),
    menuList: (provided, state) => ({
      ...provided,
      marginTop: '10px',
      maxHeight: '170px',
    }),
  };

  const handleLogin = async () => {
    router.push('/');
  };

  const handleTextClick = () => {
    setTeleport(true);
    setActiveButton('Sign in & Security');
  };

  const handleProfileClick = () => {
    if (activeButton === 'User profile') {
      return;
    } else {
      setTeleport(false);
      setActiveButton('User profile');
    }
  };

  const handleChange = (option) => {
    setSelectedFlag(option);
    setNewFlag(option.value);
    setChangeType('flag');
  };

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
    setErrorMessage('');
    setChangeType('username');
    setUserExistError(false);
  };

  const handleSubmit = async () => {
    setEmailExistsError(false);
    setPasswordError(false);
    setOldPasswordError(false);
    try {
      const token = sessionStorage.getItem('token');
      let response;

      if (newUsername && changeType === 'username') {
        response = await axios.put(
          'http://18.223.98.179:8080/api/v1/auth/changeUsername',
          {
            newUserName: newUsername,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          sessionStorage.setItem('token', response.data.token);
          window.location.reload();
          alert('Username changed successfully!');
        } else {
          alert('Error changing username');
        }
      }

      if (newFlag && changeType === 'flag') {
        response = await axios.put(
          'http://18.223.98.179:8080/api/v1/auth/changeFlag',
          {
            newFlag: newFlag,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          sessionStorage.setItem('token', response.data.token);
          alert('Flag changed successfully!');
          window.location.reload();
        } else {
          alert('Error changing flag');
        }
      }

      if (newPassword !== confirmPassword) {
        setPasswordError(true);
        return;
      }

      if (newPassword === confirmPassword && newPassword !== '') {
        response = await axios.put(
          'http://18.223.98.179:8080/api/v1/auth/changePassword',
          {
            oldPassword: oldPassword,
            newPassword: newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          sessionStorage.setItem('token', response.data.token);
          setRequestSuccess(true);
          setShowPopup(true);
        } else {
          setRequestSuccess(false);
        }
      }

      if (oldEmail !== '' || newEmail !== '') {
        if (oldEmail !== oldEmail) {
          setEmailError(true);
          return;
        }

        response = await axios.put(
          'http://18.223.98.179:8080/api/v1/auth/changeEmail',
          {
            oldEmail: oldEmail,
            newEmail: newEmail,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          sessionStorage.setItem('token', response.data.token);
          setRequestSuccess(true);
          setShowPopup(true);
        } else {
          setRequestSuccess(false);
        }
      }
    } catch (error) {
      console.error(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        setErrorMessage(error.response.data.error);
      }
      if (
        error.response &&
        error.response.data &&
        error.response.data.error ===
          'Failed to update password: Old password is incorrect'
      ) {
        setOldPasswordError(true);
      }
      if (
        error.response &&
        error.response.data &&
        error.response.data.error ===
          'Failed to update email: Old email does not match the current email'
      ) {
        setEmailError(true);
      }
      if (
        error.response &&
        error.response.data &&
        error.response.data.error ===
          'Failed to update email: Email is already registered. Please choose a different email.'
      ) {
        setEmailExistsError(true);
      }
      if (
        error.response &&
        error.response.data &&
        error.response.data.error ===
          'Failed to update username: Username is already taken. Please choose a different username.'
      ) {
        setUserExistError(true);
      }
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = `Bearer ${sessionStorage.getItem('token')}`;
        const config = {
          headers: { Authorization: token },
        };
        const response = await axios.get(
          'http://localhost:8080/api/v1/auth/user',
          config
        );
        const { email, username, flag } = response.data;
 
        setUserName(username);
        setNewUsername(username);
        setFlag(flag);
        setSelectedFlag(
          countries.find((country) => country.value === flag) || null
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (showPopup && requestSuccess) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('sessionExpiration');
    }
  }, [showPopup, requestSuccess]);

  useEffect(() => {
    setFlagUrl(flagApiUrl(flag));
  }, [flag]);

  return (
    <div className={styles.parentContainer}>
      {showPopup && requestSuccess && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <BsCheck2Circle className={styles.check} />
            <div className={styles.popupMessage}>{success}</div>
            <div className={styles.text}>Please return back to the login page</div>
            <button onClick={handleLogin} className={styles.popupButton}>
              Login Now
            </button>
          </div>
        </div>
      )}

      <div className={styles.container1}>
        <div className={styles.userProfileLogo}>
          <Image
            src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png"
            alt=""
            width={150}
            height={70}
            className={styles.logo}
          />
        </div>

        <div className={styles.userContainer}>
          <div className={styles.nameText}>{userName}</div>
          <div className={styles.FlagContainer}>
            <Image src={flagUrl} alt="" width={40} height={30} className={styles.flag} />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.button} ${
              activeButton === 'User profile' ? styles.active : ''
            }`}
            onClick={handleProfileClick}
          >
            <BsFillPersonFill className={styles.Icon} />
            User profile
          </button>
        </div>

        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.button} ${
              activeButton === 'Sign in & Security' ? styles.active : ''
            }`}
            onClick={handleTextClick}
          >
            <AiFillLock className={styles.Icon} />
            Sign in & Security
          </button>
        </div>

        <div className={styles.buttonWrapper}>
         
        </div>

        <div className={styles.moreContent}></div>
      </div>

      <div className={styles.container2}>
        {teleport && (
          <div>
            <header className={styles.Title}>Password Setting</header>

            <div className={styles.inputContainer}>
              <div
                className={`${styles.oldPasswordContainer} ${
                  oldPasswordError && styles.errorInput
                }`}
              >
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Old Password"
                  className={styles.inputFieldPassword1}
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                    if (oldPasswordError) setOldPasswordError(false);
                  }}
                />
                {oldPasswordError && (
                  <div className={styles.errorMessage3}>
                    Old password is incorrect!
                  </div>
                )}
              </div>
              {!userError && error && oldPassword && (
                <div className={styles.errorMessage1}>{error}</div>
              )}

              <div className={styles.passwordContainer}>
                <div
                  className={`${styles.inputField1} ${
                    passwordError && styles.errorInput
                  }`}
                >
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    className={styles.inputFieldPassword}
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      if (passwordError) setPasswordError(false);
                    }}
                  />
                  {passwordError && (
                    <div className={styles.errorMessage1}>
                      Passwords don't match!
                    </div>
                  )}
                </div>
                <div
                  className={`${styles.inputField1} ${
                    passwordError && styles.errorInput
                  }`}
                >
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={styles.inputFieldPassword}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (passwordError) setPasswordError(false);
                    }}
                  />
                  {passwordError && (
                    <div className={styles.errorMessage1}>
                      Passwords don't match!
                    </div>
                  )}
                </div>
              </div>

              <header className={styles.emailTitle}>Email Setting</header>

              <div className={styles.emailContainer}>
                <div
                  className={`${styles.inputField1} ${   emailError && oldEmail && styles.errorInput
                  }`}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Old Email"
                    value={oldEmail}
                    className={`${styles.inputOldFieldEmail} ${
                      userError && error && styles.errorInput
                    }`}
                    onChange={(e) => {
                      setOldEmail(e.target.value);
                      setEmailError(false);
                      setError('');
                      setUserError(false);
                      setSubmitted(false);
                    }}
                  />
                {emailError && oldEmail && (
  <div className={styles.errorMessage}>
    Old email is incorrect!
  </div>
)}

                </div>

                <div
                  className={`${styles.inputField1} ${
                    emailExistsError && styles.errorInput
                  }`}
                >
                  <input
                    type="email"
                    name="newEmail"
                    placeholder="New Email"
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                      setEmailExistsError(false);
                      setUserExistError('');
                      setSubmitted(false);
                      setUserError(false);
                    }}
                    className={styles.inputOldFieldEmail}
                  />
                  {emailExistsError && newEmail !== '' && (
                    <div className={styles.errorMessage}>
                      Email is already registered. Please choose a different
                      email.
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.topButtonContainer}>
                <div>
                    <button
                    className={styles.cancelButton}
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button className={styles.updateButton} onClick={handleSubmit}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!teleport && (
          <div>
            <div className={styles.inputContainer}>
              <header className={styles.Title}>Profile Setting</header>

              <div className={styles.inputText}>User Name:</div>
              <div
                className={`${styles.inputField1} ${
                  emailExistsError && styles.errorInput
                }`}
              >
                <input
                  type="text"
                  name="User Name"
                  placeholder="*User Name"
                  className={styles.input}
                  value={newUsername}
                  onChange={handleUsernameChange}
                />
              </div>
              {userExistError && (
                <div className={styles.errorMessage2}>
                  Username is already taken.
                </div>
              )}

              <Select
                options={countries}
                className={styles.select}
                placeholder="Select your country..."
                onChange={handleChange}
                value={selectedFlag}
                styles={customStyles}
              />

              <div className={styles.profileButtonContainer}>
                <div>
                  <button
                    className={styles.cancelButton}
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button className={styles.updateButton} onClick={handleSubmit}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
