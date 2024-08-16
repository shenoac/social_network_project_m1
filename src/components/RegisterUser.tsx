"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/app/store/userSlice'; 
import { AppDispatch, RootState } from '@/app/store'; 
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
        status: '', // Standardstatus hinzufügen, falls erforderlich
        friends:[]
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
      <button type="submit" 
      className="btn btn-sm"
      style={{
        border: '1px solid #ced4da', // Lighter border color
        borderRadius: '0.5rem', // Rounded border
        padding: '0.25rem 0.5rem', // Smaller padding
        backgroundColor: '#adb5bd', // Lighter grey background color
        color: '#fff', // White text color
        cursor: 'pointer',
        fontSize: '0.875rem' // Smaller font size
      }}>Register</button>
    </form>
  );
};

export default RegisterUser;
