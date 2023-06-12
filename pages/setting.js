import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiFillSound } from "react-icons/ai";
import { RiKey2Line } from 'react-icons/ri';
import { AiFillLock } from 'react-icons/ai';
import axios from 'axios';
import { BsFillPersonFill, BsXLg } from 'react-icons/bs';
import styles from '../styles/setting.module.css';
import Image from 'next/image';
import { BsCheck2Circle } from 'react-icons/bs';
import 'react-circular-progressbar/dist/styles.css';

import Select from 'react-select';

const Setting = () => {
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [teleport, setTeleport] = useState(false);
  const [teleport1, setTeleport1] = useState(false);
  const [teleport2, setTeleport2] = useState(false);

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
  const flagApiUrl = (countryCode) => `https://flagsapi.com/${countryCode}/flat/64.png`;

  const [newFlag, setNewFlag] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [changeType, setChangeType] = useState('');

  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    setFlagUrl(flagApiUrl(flag));
  }, [flag]);

  const countries = [
    { value: 'us', label: '🇺🇸 United States', fullName: 'United States of America' },
    { value: 'TR', label: '🇹🇷 Turkey' },
    { value: 'ID', label: '🇮🇩 Indonesia' },
    { value: 'PK', label: '🇵🇰 Pakistan' },
    { value: 'BD', label: '🇧🇩 Bangladesh' },
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
    router.push('/Login');
  };

  const handleTextClick = () => {
    setTeleport(true);
    setActiveButton('Sign in & Security');
  };

  const handleChange = (event) => {
    setNewUsername(event.target.value);
    setErrorMessage('');
    setChangeType('username');
  };
 
  const handleSubmit = async () => {
    try {
      const token = sessionStorage.getItem("token");
      let response;

      if (changeType === 'username') {
        response = await axios.put(
          'http://localhost:8080/api/v1/auth/changeUsername',
          {
            newUserName: newUsername
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        if (response.status === 200) {
          sessionStorage.setItem('token', response.data.token);
          alert('Username changed successfully!');
        } else {
          alert('Error changing username');
        }
      } else if (changeType === 'flag') {
        response = await axios.put(
          'http://localhost:8080/api/v1/auth/changeFlag',
          {
            newFlag: newFlag
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        if (response.status === 200) {
          sessionStorage.setItem('token', response.data.token);
          alert('Flag changed successfully!');
        } else {
          alert('Error changing flag');
        }
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Error changing username');
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
        const response = await axios.get('http://localhost:8080/api/v1/auth/user', config);
        const { email, username, flag } = response.data;
        setOldEmail(email);
        setNewEmail(email);
        setUserName(username);
        setNewUsername(username);
        setFlag(flag);
        setSelectedFlag(countries.find((country) => country.value === flag));
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={styles.parentContainer}>
      {success && (
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
            className={`${styles.button} ${activeButton === 'User profile' ? styles.active : ''}`}
          >
            <BsFillPersonFill className={styles.Icon} />
            User profile
          </button>
        </div>

        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.button} ${activeButton === 'Sign in & Security' ? styles.active : ''}`}
            onClick={handleTextClick}
          >
            <AiFillLock className={styles.Icon} />
            Sign in & Security
          </button>
        </div>

        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.button} ${activeButton === 'Banking Info' ? styles.active : ''}`}
          >
            <AiFillSound className={styles.Icon} />
            Audio
          </button>
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
                  !userError && error && oldPassword && styles.errorInput
                }`}
              >
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Old Password"
                  className={styles.inputFieldOldPassword}
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                    setError('');
                    setUserError(false);
                    setSubmitted(false);
                  }}
                />
              </div>
              {!userError && error && oldPassword && (
                <div className={styles.errorMessage1}>{error}</div>
              )}

              <div className={styles.passwordContainer}>
                <div
                  className={`${styles.access} ${
                    submitted && newPassword !== confirmPassword && styles.errorInput
                  }`}
                >
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    className={styles.inputFieldPassword1}
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      if (passwordError) setPasswordError(false);
                    }}
                  />
                  {submitted && newPassword !== confirmPassword && (
                    <div className={styles.errorMessage1}>Passwords don't match!</div>
                  )}
                </div>
                <div
                  className={`${styles.inputField1} ${
                    submitted && newPassword !== confirmPassword && styles.errorInput
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
                  {submitted && newPassword !== confirmPassword && (
                    <div className={styles.errorMessage1}>Passwords don't match!</div>
                  )}
                </div>
              </div>

              <header className={styles.emailTitle}>Email Setting</header>

              <div className={styles.emailContainer}>
                <div
                  className={`${styles.inputField1} ${
                    userError && error && styles.errorInput
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
                      setError('');
                      setUserError(false);
                      setSubmitted(false);
                    }}
                  />
                  {userError && error && <div className={styles.errorMessage}>{error}</div>}
                </div>

                <div className={`${styles.inputField1} ${userExistError && styles.errorInput}`}>
                  <input
                    type="email"
                    name="newEmail"
                    placeholder="New Email"
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                      setUserExistError('');
                      setSubmitted(false);
                      setUserError(false);
                    }}
                    className={styles.inputOldFieldEmail}
                  />
                  {userExistError && <div className={styles.errorMessage}>{userExistError}</div>}
                </div>
              </div>

              <div className={styles.topButtonContainer}>
                <div>
                  <button
                    className={styles.cancelButton2}
                 
                  >
                    Update
                  </button>
                </div>
                <div>
                  <button
                    className={styles.updateButton2}
                 
                  >
                    Cancel
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
                className={`${styles.inputField1} ${firstNameError && styles.errorInput}`}
              >
                <input
                  type="text"
                  name="User Name"
                  placeholder="*User Name"
                  className={styles.input}
                  value={newUsername}
                  onChange={handleChange}
                />
              </div>
              {firstNameError && (
                <div className={styles.errorMessage2}> 
                  Last name must be between 2 and 10 characters.
                </div>
              )}
<Select
    options={countries}
    className={styles.select}
    placeholder="Select your country..."
    onChange={(option) => {
        setNewFlag(option.value);
        setChangeType('flag'); // update changeType here
    }}
    value={selectedFlag}
    styles={customStyles}
/>



              <div className={styles.profileButtonContainer}>
                <div>
                  <button
                    className={styles.cancelButton}
                    onClick={handleSubmit}
                  >
                    Update
                  </button>
                </div>
                <div>
                  <button
                    className={styles.updateButton}
                    onClick={() => {
                      setNewFlag('');
                      setNewUsername('');
                    }}
                  >
                    Cancel
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
