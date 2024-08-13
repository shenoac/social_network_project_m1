// src/pages/index.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../src/app/store/userSlice'; // Adjust path as needed
import { RootState, AppDispatch } from '../../src/app/store/index'; // Adjust path as needed
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(username));
    setUsername('');
  };

  useEffect(() => {
    if (currentUser) {
      router.push('/profile'); // Redirect to profile page if login is successful
    }
  }, [currentUser, router]);

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
