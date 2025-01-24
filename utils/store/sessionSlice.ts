import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of the user
interface User {
  id: string;
  name: string;
  email: string;
}

// Define the initial state type
interface SessionState {
  user: User | null;
}

// Initial state
const initialState: SessionState = {
  user: null,
};

// Create the session slice
const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearSession: (state) => {
      state.user = null;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
