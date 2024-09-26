import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: JSON.parse(localStorage.getItem("userToken")) || false,
};
const usersTokenSlice = createSlice({
  name: "userToken",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});
export const {setUserToken}=usersTokenSlice.actions;
export default usersTokenSlice.reducer