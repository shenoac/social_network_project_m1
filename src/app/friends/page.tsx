"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addFriend, removeFriend } from '../store/userSlice';

const Friends: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const users = useSelector((state: RootState) => state.user.users);

  const handleAddFriend = (username: string) => {
    if (currentUser) {
      dispatch(addFriend({ username: currentUser.username, friend: username }));
    }
  };

  const handleRemoveFriend = (username: string) => {
    if (currentUser) {
      dispatch(removeFriend({ username: currentUser.username, friend: username }));
    }
  };

  if (!currentUser) return <p>Loading...</p>;

  const friends = currentUser.friends || [];

  return (
    <div>
      <h3>Your Friends:</h3>
      <ul>
        {friends.length > 0 ? (
          friends.map(friendUsername => {
            const friend = users.find(user => user.username === friendUsername);
            return friend ? (
              <li key={friend.username}>
                <p>{friend.name}</p>
                <button onClick={() => handleRemoveFriend(friend.username)}>Remove Friend</button>
              </li>
            ) : null;
          })
        ) : (
          <li>No friends found.</li>
        )}
      </ul>

      <h3>Add More Friends:</h3>
      <ul>
        {users
          .filter(user => user.username !== currentUser.username && !friends.includes(user.username))
          .map(user => (
            <li key={user.username}>
              <p>{user.name}</p>
              <button onClick={() => handleAddFriend(user.username)}>Add Friend</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Friends;
