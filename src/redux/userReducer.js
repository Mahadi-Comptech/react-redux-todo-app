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
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deletedUser = state.find((user) => user.id == id);
      if (deletedUser) return state.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
