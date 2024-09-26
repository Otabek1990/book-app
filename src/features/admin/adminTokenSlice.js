import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminToken: JSON.parse(localStorage.getItem("adminToken")) || false,
};
const adminTokenSlice = createSlice({
  name: "adminToken",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
  },
});
export const {setAdminToken}=adminTokenSlice.actions;
export default adminTokenSlice.reducer