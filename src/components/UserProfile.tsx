"use client"
// src/pages/profile.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/app/store/index'; // Adjust path as needed
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Profile: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/'); // Redirect to login page if no user is logged in
    }
  }, [currentUser, router]);

  if (!currentUser) return null; // Prevent rendering until redirect happens

  return (
    <div>
      <h2>Welcome, {currentUser.name}!</h2>
      <p>You are logged in as: {currentUser.username}</p>
      <img src={currentUser.profilePic} alt="Profile" />
      <p>{currentUser.bio}</p>
    </div>
  );
};

export default Profile;
