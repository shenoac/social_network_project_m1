// FriendProfilePage.tsx
"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { RootState } from '@/app/store';
import Feed from '@/components/Feed';

const FriendProfilePage: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const username = pathname.split('/').pop(); // Get username from URL
  const users = useSelector((state: RootState) => state.user.users);

  const friend = users.find(user => user.username === username);

  if (!friend) {
    return <p>User not found.</p>;
  }

  return (
    <div>
      <h1>{friend.name}'s Profile</h1>
      <div>
        <img src={friend.profilePic} alt={`${friend.name}'s profile picture`} />
        <p>Bio: {friend.bio}</p>
        <p>Status: {friend.status}</p>
        <Feed />
      </div>
    </div>
  );
};

export default FriendProfilePage;
