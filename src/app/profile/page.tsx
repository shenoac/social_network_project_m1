// ProfilePage.tsx
'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useRouter } from 'next/navigation';
import { logoutUser } from '../store/userSlice';
import FriendList from '@/components/FriendList';
import UserList from '@/components/UserList'; 
import StatusUpdate from '@/components/StatusUpdate';
import Feed from '@/components/Feed';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser, router]);

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
      <Feed />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
