import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleModal: false,
  modalType: "user",
  currentUserId:""
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.visibleModal = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setCurrentUserId:(state,action)=>{
      state.currentUserId=action.payload
    }
  },
});
export const { setModal, setModalType,setCurrentUserId } = modalSlice.actions;
export default modalSlice.reducer;
