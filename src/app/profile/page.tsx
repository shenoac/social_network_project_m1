// src/pages/profile.tsx

"use client"

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // Adjust the path to your store
import { useRouter } from 'next/navigation'; // Use this if you're in the app directory

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
      <h2>Welcome to your profile, {currentUser.name}!</h2>
      <p>This is your profile page.</p>
      <p>Your username is: {currentUser.username}</p>
      <img src={currentUser.profilePic} alt="Profile" />
      <p>Bio: {currentUser.bio}</p>
    </div>
  );
};

export default Profile;
