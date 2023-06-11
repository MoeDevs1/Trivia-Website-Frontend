import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiEdit2 } from 'react-icons/fi';
import { RiKey2Line } from 'react-icons/ri';
import { AiFillLock } from 'react-icons/ai';
import axios from 'axios';
import { BsFillPersonFill, BsXLg } from 'react-icons/bs';
import styles from '../styles/setting.module.css';
import Image from 'next/image';
import { BsCheck2Circle } from 'react-icons/bs';

const UserProfile = () => {
  const [teleport, setTeleport] = useState(false);
  const [teleport1, setTeleport1] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const router = useRouter();
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userExistError, setUserExistError] = useState(false);
  const [success, setSuccess] = useState('');
  const [phone, setPhone] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [rawPhone, setRawPhone] = useState('');
  const [activeButton, setActiveButton] = useState('User profile');
  const [username, setUsername] = useState(''); // Add the username state variable

  const handleButtonClick = (event) => {
    setActiveButton(event.target.innerText);
  };

  const formatPhoneNumber = (number) => {
    const cleaned = ('' + number).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return null;
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = `Bearer ${sessionStorage.getItem('token')}`;
        const config = {
          headers: { Authorization: token },
        };
        const response = await axios.get('http://localhost:8080/api/v1/auth/user', config);
        const { username } = response.data;
        setUsername(username);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);
 // Fetch user data on component mount

  const handleCancel = () => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setOldPassword('');
    setNewPassword('');
    setNewEmail('');
    setOldEmail('');
    setConfirmPassword('');
    setError('');
    setUserError(false);
    setPasswordError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setSubmitted(false);
  };

  const handleLogin = async () => {
    router.push('/Login');
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
      setTeleport1(false);
      setActiveButton('User profile');
    }
  };

  const handleUpdateRresh = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);

    if (newLastName.length < 2 || newLastName.length > 10) {
      setLastNameError(true);
      return;
    } else {
      setLastNameError(false);
    }

    if (newFirstName.length < 2 || newFirstName.length > 10) {
      setFirstNameError(true);
      return;
    } else {
      setFirstNameError(false);
    }

    try {
      const response = await axios.post('http://localhost:3000/api/ChangeInfo', {
        oldPassword,
        newPassword,
        confirmPassword,
        oldEmail,
        phone: rawPhone,
        newEmail,
        firstName: newFirstName,
        lastName: newLastName,
      });

      if (response.data.success) {
        setTeleport(false);
        setOldPassword('');
        setNewPassword('');
        setNewEmail('');
        setOldEmail('');
        setConfirmPassword('');
        setError('');
        setUserError(false);
        setSubmitted(false);
        router.replace(router.asPath);
        if (newPassword || oldPassword) {
          setSuccess('Successful Password Update!');
        } else if (newEmail || oldEmail) {
          setSuccess('Successful Email Update!');
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid old email');
        setUserError(true);
      } else if (error.response && error.response.status === 404) {
        setError('Invalid old password');
        setUserError(false);
      } else if (error.response && error.response.status === 409) {
        setUserExistError('Email already exists');
        setUserError(true);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    try {
      const response = await axios.post('http://localhost:3000/api/ChangeInfo', {
        oldPassword,
        newPassword,
        confirmPassword,
        oldEmail,
        newEmail,
        phone: rawPhone,
        firstName: newFirstName,
        lastName: newLastName,
      });

      if (response.data.success) {
        setTeleport(false);
        setOldPassword('');
        setNewPassword('');
        setNewEmail('');
        setOldEmail('');
        setConfirmPassword('');
        setError('');
        setUserError(false);
        setSubmitted(false);
        router.replace(router.asPath);
        if (newPassword || oldPassword) {
          setSuccess('Successful Password Update!');
        } else if (newEmail || oldEmail) {
          setSuccess('Successful Email Update!');
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid old email');
        setUserError(true);
      } else if (error.response && error.response.status === 404) {
        setError('Invalid old password');
        setUserError(false);
      } else if (error.response && error.response.status === 409) {
        setUserExistError('Email already exists');
        setUserError(true);
      }
    }
  };

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

      <div className={styles.container2}>
      <div className={styles.logoWrapper} >
        <Image
          src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png"
          alt=""
          width={200}
          height={100}
          className={styles.logoo}
        />
      </div>
        <header className={styles.Title}>UserName Setting</header>

        <div className={styles.inputText}>UserName: </div>
        <div className={`${styles.inputField1} ${firstNameError && styles.errorInput}`}>
        <input
            type="text"
            name="UserName"
            placeholder={username}
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {firstNameError && (
          <div className={styles.errorMessage2}>Last name must be between 2 and 10 characters.</div>
        )}

        <header className={styles.Title}>Password Setting</header>

        <div className={styles.inputContainer}>
          <div className={`${styles.oldPasswordContainer} ${!userError && error && oldPassword && styles.errorInput}`}>
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
          {!userError && error && oldPassword && <div className={styles.errorMessage1}>{error}</div>}

          <div className={styles.passwordContainer}>
            <div className={`${styles.access} ${submitted && newPassword !== confirmPassword && styles.errorInput}`}>
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
                <div className={styles.errorMessage1}>Passwords Don't match!</div>
              )}
            </div>
            <div className={`${styles.inputField1} ${submitted && newPassword !== confirmPassword && styles.errorInput}`}>
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
                <div className={styles.errorMessage1}>Passwords Don't match!</div>
              )}
            </div>
          </div>

          <header className={styles.emailTitle}>Email Setting</header>

          <div className={styles.emailContainer}>
            <div className={`${styles.inputField1} ${userError && error && styles.errorInput}`}>
              <input
                type="email"
                name="email"
                placeholder="Old Email"
                value={oldEmail}
                className={`${styles.inputOldFieldEmail} ${userError && error && styles.errorInput}`}
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
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.profileButtonContainer}>
            <div>
              <button className={styles.cancelButton} onClick={handleUpdateRresh}>
                Update
              </button>
            </div>
            <div>
              <button className={styles.updateButton} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
