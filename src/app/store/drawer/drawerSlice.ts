import { createSlice } from "@reduxjs/toolkit";
import { IAlbumResponse } from "../../../entities/albums/types";
import { IStateAlbum } from "./types";

interface InitialState {
  isDrawerOpen: boolean;
  activeAlbumId: string;
  activeTrackId: string;
}
const initialState: InitialState = {
  isDrawerOpen: false,
  activeAlbumId: "",
  activeTrackId: "",
};
export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
    setActiveAlbumId: (state, action) => {
      state.activeAlbumId = action.payload;
    },
    setActiveTrackId: (state, action) => {
      state.activeTrackId = action.payload;
    },
  },
});
export const { openDrawer, setActiveAlbumId, setActiveTrackId } =
  drawerSlice.actions;
export default drawerSlice.reducer;
