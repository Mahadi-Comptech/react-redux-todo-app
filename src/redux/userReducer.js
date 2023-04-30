import { createSlice } from "@reduxjs/toolkit";
import initialState from "../data";

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //reducer methods goes here
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, updatedName, updatedEmail } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        updatingUser.name = updatedName;
        updatingUser.email = updatedEmail;
      }
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
