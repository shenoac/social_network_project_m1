"use client"
// Login.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../src/app/store/userSlice';
import { RootState, AppDispatch } from '../../src/app/store/index';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(username));
    setUsername('');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {currentUser ? (
        <div>
          <h3>Welcome, {currentUser.name}!</h3>
          <img src={currentUser.profilePic} alt="Profile" />
          <p>{currentUser.bio}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Login;
