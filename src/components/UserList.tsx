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
      <div className='container mt-4'>
        <h3>Available Users</h3>
        <ul className='list-unstyled'>
          {users
            .filter(user => user.username !== currentUser?.username) // Exclude current user from list
            .map(user => (
              <li key={user.username} className='mb-3'>
                <Link href={`/profile/${user.username}`}>
                  {user.name}
                </Link>
                <button
                className='btn btn-primary btn-sm ms-2'
                 onClick={() => handleAddFriend(user.username)}>Add Friend</button>              

                 
              </li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;