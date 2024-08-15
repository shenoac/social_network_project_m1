// src/app/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  profilePic: string;
  bio: string;
  username: string;
  status?: string; // Add status field
}

interface AuthState {
  users: UserState[];
  currentUser: UserState | null;
}

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
  ],
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<UserState>) => {
      const existingUser = state.users.find(user => user.username === action.payload.username);
      if (!existingUser) {
        state.users.push(action.payload);
      } else {
        console.log('User with this username already exists!');
      }
    },
    loginUser: (state, action: PayloadAction<string>) => {
      const user = state.users.find(user => user.username === action.payload);
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null;
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
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

export const { registerUser, loginUser, logoutUser, updateUserStatus } = userSlice.actions;
export default userSlice.reducer;
