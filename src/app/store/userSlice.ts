// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  name: string;
  profilePic: string;
  bio: string;
  status: string;
  friends: string[];
}

interface UserState {
  users: User[];
  currentUser: User | null;
}

const initialState: UserState = {
  users: [
    // Beispielbenutzer
    {
      username: 'johndoe',
      name: 'John Doe',
      profilePic: '/path/to/profilePic.jpg',
      bio: 'Developer at XYZ',
      status: 'Online',
      friends: ['janedoe'],
    },
    {
      username: 'janedoe',
      name: 'Jane Doe',
      profilePic: '/path/to/profilePic2.jpg',
      bio: 'Designer at XYZ',
      status: 'Offline',
      friends: ['johndoe'],
    },
  ],
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<string>) {
      const user = state.users.find(user => user.username === action.payload);
      state.currentUser = user || null;
    },
    logoutUser(state) {
      state.currentUser = null;
    },
    addFriend(state, action: PayloadAction<{ username: string; friend: string }>) {
      console.log(action)
      console.log(state.users)
      const user = state.users.find(user => user.name === action.payload.username);
      console.log(user)
      if (user) {
        if (!user.friends) {
          console.log("Hello")
          user.friends = [];
        } console.log("TEST")
        if (!user.friends.includes(action.payload.friend)) {
          user.friends.push(action.payload.friend);
          console.log(user.friends)
          const friendUser = state.users.find(user => user.username === action.payload.friend);
          if (friendUser) {
            if (!friendUser.friends) {
              friendUser.friends = [];
            }
            if (!friendUser.friends.includes(action.payload.username)) {
              friendUser.friends.push(action.payload.username);
            }
          }
        }
      }
    },
    removeFriend(state, action: PayloadAction<{ username: string; friend: string }>) {
      const user = state.users.find(user => user.username === action.payload.username);
      if (user) {
        user.friends = user.friends.filter(friend => friend !== action.payload.friend);
        const friendUser = state.users.find(user => user.username === action.payload.friend);
        if (friendUser) {
          friendUser.friends = friendUser.friends.filter(friend => friend !== action.payload.username);
        }
      }
    },
    registerUser(state, action: PayloadAction<User>) {
      const existingUser = state.users.find(user => user.username === action.payload.username);
      if (!existingUser) {
        state.users.push(action.payload);
      }
    },
    loginUser(state, action: PayloadAction<User>) {
      const user = state.users.find(user => user.username === action.payload.username);
      if (user) {
        state.currentUser = user;
      }
    },
    updateUserStatus(state, action: PayloadAction<{ username: string; status: string }>) {
      const { username, status } = action.payload;
      const user = state.users.find(user => user.username === username);
      if (user) {
        user.status = status;
        if (state.currentUser?.username === username) {
          state.currentUser.status = status;
        }
      }
    },

}});

export const { setCurrentUser, logoutUser, addFriend, removeFriend, registerUser, loginUser, updateUserStatus } = userSlice.actions;
export default userSlice.reducer;
