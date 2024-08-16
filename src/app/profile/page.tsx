"use client"

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useRouter } from 'next/navigation';
import { logoutUser, updateUserProfilePic } from '../store/userSlice'; // Import the action to update the profile picture
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

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      handleImageUpload(file);
    }
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result && typeof reader.result === 'string') {
        dispatch(updateUserProfilePic({ username: currentUser?.username, profilePic: reader.result }));
      }
    };
    reader.readAsDataURL(file); // Convert image to base64 string
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/login');
  };

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div>
      <h2
        style={{
          fontFamily: 'inherit', // Use the same font family as the navbar
          fontWeight: '500', // Medium weight to match the navbar brand style
          fontSize: '1.25rem', // Slightly larger font size
          color: '#343a40', // Dark gray color to match the text-dark class
        }}
      >
        Profile
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img
          src={currentUser.profilePic}
          alt={`${currentUser.name}'s profile picture`}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginRight: '1rem',
            border: '2px solid #ced4da',
          }}
        />
        <div>
          <h2
            style={{
              fontFamily: 'inherit', // Use the same font family as the navbar
              fontWeight: '500', // Medium weight to match the navbar brand style
              fontSize: '1.25rem', // Slightly larger font size
              color: '#343a40', // Dark gray color to match the text-dark class
            }}
          >
            {currentUser.name}
          </h2>
          <p>{currentUser.bio}</p>
          <p>Status: {currentUser.status}</p>
        </div>
      </div>

      <input type="file" onChange={handleFileChange} />
      <StatusUpdate />
      <FriendList />
      <UserList />
      <Feed />
      <button
        onClick={handleLogout}
        style={{
          border: '1px solid #ced4da', // Lighter border color
          borderRadius: '0.5rem', // Rounded border
          padding: '0.25rem 0.5rem', // Smaller padding
          backgroundColor: '#adb5bd', // Lighter grey background color
          color: '#fff', // White text color
          cursor: 'pointer',
          fontSize: '0.875rem', // Smaller font size
          marginTop: '1rem', // Add some space above the button
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
