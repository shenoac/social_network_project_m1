"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store'; // Adjust the import path as needed

const Feed: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const users = useSelector((state: RootState) => state.user.users);

  if (!currentUser) {
    return <p>Please log in to view your feed.</p>;
  }

  // Filter the feed to show only the statuses of the current user and their friends
  const feedItems = users.filter(user =>
    user.username === currentUser.username || currentUser.friends.includes(user.username)
  );

  return (
    <div>
      <h2>Your Feed</h2>
      {feedItems.length > 0 ? (
        feedItems.map(user => (
          <div key={user.id} className="feed-item">
            <h3>{user.name}</h3>
            <p>{user.status || "No status update"}</p>
          </div>
        ))
      ) : (
        <p>No updates to show.</p>
      )}
    </div>
  );
};

export default Feed;
