import { drawerSlice } from "./drawer/drawerSlice";
import { configureStore } from "@reduxjs/toolkit";
import audioSlice from "./audio/audioSlice";
import playerSlice from "./player/playerSlice";
import { tracksApi } from "../../entities/tracks/tracksApi";
import { authApi } from "../../entities/auth/authApi";
import { profileApi } from "../../entities/profile/profileApi";
import { albumApi } from "../../entities/albums/albumApi";

export const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
    audioSlice,
    playerSlice,
    drawerSlice: drawerSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      profileApi.middleware,
      tracksApi.middleware,
      albumApi.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
