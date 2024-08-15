<<<<<<< Updated upstream
// src/components/StatusUpdate.tsx

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '../../src/app/store/userSlice';
import { RootState } from '../../src/app/store/index';
=======
"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '@/app/store/userSlice';
import { RootState } from '@/app/store';
>>>>>>> Stashed changes

const StatusUpdate: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
<<<<<<< Updated upstream
  const [status, setStatus] = useState<string>(currentUser?.status || '');

  useEffect(() => {
    setStatus(''); // Clear the input field when the component mounts or the user logs in
  }, [currentUser]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      dispatch(updateUserStatus({ username: currentUser.username, status }));
      setStatus(''); // Clear the input field after updating the status
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Status: </label>
        <input
          type="text"
          value={status}
          onChange={handleStatusChange}
        />
        <button type="submit">Update Status</button>
      </div>
    </form>
=======
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
>>>>>>> Stashed changes
  );
};

export default StatusUpdate;
