import { createSlice } from "@reduxjs/toolkit";
import initialState from "../data";

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //reducer methods goes here
    addUser: (state, action) => {
      console.log(action)
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
