// components/UserList.tsx
'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { addFriend } from '@/app/store/userSlice';
import Link from 'next/link';

const UserList: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.user.users); // Alle Benutzer
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
  
    const handleAddFriend = (username: string) => {
      if (currentUser) {
        console.log(currentUser);
        console.log(username)
        dispatch(addFriend({ username: currentUser.name, friend: username }));
      }
    };
  
    return (
      <div>
        <h3>Available Users</h3>
        <ul>
          {users
            .filter(user => user.username !== currentUser?.username) // Exclude current user from list
            .map(user => (
              <li key={user.username}>
                <Link href={`/profile/${user.username}`}>
                  {user.name}
                </Link>
                <button onClick={() => handleAddFriend(user.username)}
                  className="btn btn-sm"
                  style={{
                    border: '1px solid #ced4da', // Lighter border color
                    borderRadius: '0.5rem', // Rounded border
                    padding: '0.25rem 0.5rem', // Smaller padding
                    backgroundColor: '#adb5bd', // Lighter grey background color
                    color: '#fff', // White text color
                    cursor: 'pointer',
                    fontSize: '0.875rem' // Smaller font size
                  }}>Add Friend</button>
              </li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;