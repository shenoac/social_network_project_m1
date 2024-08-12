// userSlice.ts
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

const initialState: AuthState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<UserState>) => {
      state.users.push(action.payload);
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
