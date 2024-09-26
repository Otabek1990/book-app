import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/usersApi";
import AdminTokenReducer from "../features/admin/adminTokenSlice";
import UserTokenReducer from "../features/users/usersTokenSlice";
export const store = configureStore({
  reducer: {
    adminToken: AdminTokenReducer,
    userToken: UserTokenReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
