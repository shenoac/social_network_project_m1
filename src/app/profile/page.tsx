// ProfilePage.tsx
'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< Updated upstream
import { RootState } from '../store'; // Adjust the path to your store
import { useRouter } from 'next/navigation'; // Use this if you're in the app directory
import { logoutUser } from '../store/userSlice'; // Import the logout action
import StatusUpdate from '@/components/StatusUpdate';

const Profile: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
=======
import { RootState } from '../store';
import { useRouter } from 'next/navigation';
import { logoutUser } from '../store/userSlice';
import FriendList from '@/components/FriendList';
import UserList from '@/components/UserList'; // Importiere die UserList-Komponente
import StatusUpdate from '@/components/StatusUpdate';

const ProfilePage: React.FC = () => {
>>>>>>> Stashed changes
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser, router]);

<<<<<<< Updated upstream
  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the logout action
    router.push('/login'); // Redirect to the login page
  };

  if (!currentUser) return null; // Prevent rendering until redirect happens

  return (
    <div>
      <h2>Welcome to your profile, {currentUser.name}!</h2>
      <p>This is your profile page.</p>
      <p>Your username is: {currentUser.username}</p>
      <img src={currentUser.profilePic} alt="Profile" />
      <p>Bio: {currentUser.bio}</p>
      <h3>Your Status:</h3>
      <p>{currentUser.status}</p>

      <StatusUpdate /> {/* Add the status update form here */}

      <button onClick={handleLogout}>Logout</button> {/* Add the Logout button here */}
=======
  if (!currentUser) return <p>Loading...</p>;

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/login');
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <img src={currentUser.profilePic} alt={`${currentUser.name}'s profile picture`} />
        <h2>{currentUser.name}</h2>
        <p>{currentUser.bio}</p>
        <p>Status: {currentUser.status}</p>
      </div>
      <StatusUpdate />
      <FriendList />
      <UserList /> {/* Zeige alle verfügbaren Benutzer an */}

      <button onClick={handleLogout}>Logout</button>
>>>>>>> Stashed changes
    </div>
  );
};

export default ProfilePage;
