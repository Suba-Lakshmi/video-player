import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
    signup: false,
    signIn: false,
  },
  reducers: {
    addUser: (state, action) => {
      const password = action.payload.password;
      state.value[action.payload.name] = password;
    },
    updateSignup: (state) => {
      const temp = !state.signup;
      state.signup = temp;
    },
    updateSignIn: (state) => {
      const temp = !state.signIn;
      state.signIn = temp;
    },
    deleteUser: (state) => {
      state.value = {};
    },
  },
});
export const { addUser, updateSignIn, updateSignup, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
