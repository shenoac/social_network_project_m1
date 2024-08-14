// src/app/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  profilePic: string;
  bio: string;
  username: string;
}

interface AuthState {
  users: UserState[];
  currentUser: UserState | null;
}

// Initial state with some dummy users
const initialState: AuthState = {
  users: [
    {
      name: 'John Doe',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Software Developer from NY.',
      username: 'johndoe',
    },
    {
      name: 'Jane Smith',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Graphic Designer from LA.',
      username: 'janesmith',
    },
    {
      name: 'Alice Johnson',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Product Manager from SF.',
      username: 'alicejohnson',
    },
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
        // Optional: Handle this case by updating the state with an error message or notification
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
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
