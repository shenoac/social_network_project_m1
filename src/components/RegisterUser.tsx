// src/components/RegisterUser.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../src/app/store/userSlice';
import { AppDispatch, RootState } from '../../src/app/store/index';
import { useRouter } from 'next/navigation';

const RegisterUser: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [profilePic, setProfilePic] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      setError('Username already exists. Please choose a different one.');
    } else {
      dispatch(registerUser({
        name,
        profilePic,
        bio,
        username,
      }));

      // Redirect to the login page after successful registration
      router.push('/login');

      // Reset form fields
      setName('');
      setProfilePic('');
      setBio('');
      setUsername('');
      setError(null); // Clear any existing error
    }
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
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterUser;
