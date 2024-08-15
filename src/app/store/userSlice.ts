<<<<<<< Updated upstream
// src/app/store/userSlice.ts
=======
// store/userSlice.ts
>>>>>>> Stashed changes
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  name: string;
  profilePic: string;
  bio: string;
<<<<<<< Updated upstream
  username: string;
  status?: string; // Add status field
=======
  status: string;
  friends: string[];
>>>>>>> Stashed changes
}

interface UserState {
  users: User[];
  currentUser: User | null;
}

<<<<<<< Updated upstream
const initialState: AuthState = {
  users: [
    {
      name: 'John Doe',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Software Developer from NY.',
      username: 'johndoe',
      status: '', // Initialize with an empty status
    },
    // Add other users here
=======
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
>>>>>>> Stashed changes
  ],
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
<<<<<<< Updated upstream
    registerUser: (state, action: PayloadAction<UserState>) => {
      const existingUser = state.users.find(user => user.username === action.payload.username);
      if (!existingUser) {
        state.users.push(action.payload);
      } else {
        console.log('User with this username already exists!');
      }
    },
    loginUser: (state, action: PayloadAction<string>) => {
=======
    setCurrentUser(state, action: PayloadAction<string>) {
>>>>>>> Stashed changes
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
    updateUserStatus: (state, action: PayloadAction<{ username: string, status: string }>) => {
      const user = state.users.find(user => user.username === action.payload.username);
      if (user) {
        user.status = action.payload.status;
        if (state.currentUser?.username === action.payload.username) {
          state.currentUser.status = action.payload.status;
        }
      }
    },
  },
});

<<<<<<< Updated upstream
export const { registerUser, loginUser, logoutUser, updateUserStatus } = userSlice.actions;
=======
export const { setCurrentUser, logoutUser, addFriend, removeFriend, registerUser, loginUser, updateUserStatus } = userSlice.actions;
>>>>>>> Stashed changes
export default userSlice.reducer;
