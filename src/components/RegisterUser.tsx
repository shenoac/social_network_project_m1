// RegisterUser.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../src/app/store/userSlice';
import { AppDispatch } from '../../src/app/store/index';

const RegisterUser: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [profilePic, setProfilePic] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(registerUser({
      name,
      profilePic,
      bio,
      username,
    }));

    // Reset form fields
    setName('');
    setProfilePic('');
    setBio('');
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Profile Picture URL:</label>
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </div>
      <div>
        <label>Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterUser;
