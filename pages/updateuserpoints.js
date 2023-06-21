import React, { useState } from 'react';
import axios from 'axios';

const UpdateUserName = () => {
  const [userId, setUserId] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newBlank, setNewBlank] = useState('');

  const handleUpdateUserName = () => {
    const requestData = {
      userId: userId,
      newBlank: newBlank
    };

    axios.put('http://localhost:8080/api/v1/auth/updateUserName', requestData)
      .then(response => {
        console.log(response.data);
        // Handle success case
      })
      .catch(error => {
        console.error(error);
        // Handle error case
      });
  };

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="text"
        value={newBlank}
        onChange={e => setNewBlank(e.target.value)}
  placeholder="New Blank"
      />
      <button onClick={handleUpdateUserName}>Update User Username</button>
    </div>
  );
};

export default UpdateUserName;
