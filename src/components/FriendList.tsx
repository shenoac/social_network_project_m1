'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { addFriend, removeFriend } from '@/app/store/userSlice';
import Link from 'next/link';

const FriendList: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  console.log(currentUser)
  const users = useSelector((state: RootState) => state.user.users);
  const friends = users.find((user) => user.name == currentUser?.name)?.friends || []
  console.log(users)
  console.log(friends)
  const [newFriend, setNewFriend] = useState<string>('');

  if (!currentUser) {
    return <p>No user loaded.</p>;
  }

  // Sicherstellen, dass currentUser.friends existiert
  // const friends = currentUser.friends || [];

  const handleAddFriend = () => {
    if (newFriend) {
      dispatch(addFriend({ username: currentUser.username, friend: newFriend }));
      setNewFriend(''); // Clear input field after adding
    }
  };

  const handleRemoveFriend = (friend: string) => {
    dispatch(removeFriend({ username: currentUser.username, friend }));
  };

  console.log('Current user:', currentUser); // Debugging
  console.log('Friends list:', friends); // Debugging

  return (
    <div>
      <h3>Your Friends</h3>
      <ul>
        {friends.length > 0 ? (
          friends.map((friend) => (
            <li key={friend}>
              <Link href={`/profile/${friend}`}>
                {friend}
              </Link>
              <button onClick={() => handleRemoveFriend(friend)}
                className="btn btn-sm"
                style={{
                  border: '1px solid #ced4da', // Lighter border color
                  borderRadius: '0.5rem', // Rounded border
                  padding: '0.25rem 0.5rem', // Smaller padding
                  backgroundColor: '#adb5bd', // Lighter grey background color
                  color: '#fff', // White text color
                  cursor: 'pointer',
                  fontSize: '0.875rem' // Smaller font size
                }}>Remove</button>
            </li>
          ))
        ) : (
          <p>No friends added yet.</p>
        )}
      </ul>

      {/* <div>
        <input
          type="text"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          placeholder="Add a new friend"
        />
        <button onClick={handleAddFriend}>Add Friend</button>
      </div> */}
    </div>
  );
};

export default FriendList;
