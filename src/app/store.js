import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/usersApi";
import AdminTokenReducer from "../features/admin/adminTokenSlice";
import UserTokenReducer from "../features/users/usersTokenSlice";
import ModalReducer from "@features/modalSlice";
import { booksApi } from "../services/bookApi";
export const store = configureStore({
  reducer: {
    adminToken: AdminTokenReducer,
    userToken: UserTokenReducer,
    modal: ModalReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware,booksApi.middleware),
});
