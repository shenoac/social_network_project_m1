"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../src/app/store/userSlice'; // Pfad anpassen
import { RootState, AppDispatch } from '../../src/app/store/index'; // Pfad anpassen
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state: RootState) => state.user.users);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  useEffect(() => {
    if (currentUser) {
      router.push('/profile'); // Weiterleitung zur Profilseite, wenn bereits eingeloggt
    }
  }, [currentUser, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = users.find(user => user.username === username);
    if (user) {
      dispatch(loginUser(user));
      router.push('/profile'); // Weiterleitung zur Profilseite nach erfolgreichem Login
    } else {
      alert('Invalid username');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
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
      }}>Login</button>
    </form>
  );
};

export default Login;
