import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [newFlag, setNewFlag] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setNewFlag(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.put(
        'http://localhost:8080/api/v1/auth/changeFlag',
        {
          newFlag: newFlag // Change the variable name here to match the server-side request
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
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Error changing flag');
      }
    }
  };

  return (
    <div>
      <input type="text" value={newFlag} onChange={handleChange} />
      <button onClick={handleSubmit}>Change Flag</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Test;
