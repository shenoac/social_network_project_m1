"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '@/app/store/userSlice';
import { RootState } from '@/app/store';

const StatusUpdate: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [status, setStatus] = useState<string>('');

  if (!currentUser) {
    return <p>No user logged in.</p>;
  }

  const handleUpdateStatus = () => {
    dispatch(updateUserStatus({ username: currentUser.username, status }));
    setStatus(''); // Clear input field after updating
  };

  return (
    <div>
      <h3>Update Your Status</h3>
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button onClick={handleUpdateStatus}>Update Status</button>
    </div>
  );
};

export default StatusUpdate;
