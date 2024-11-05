import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  openModalTrackId: string | null;
}

const initialState: PlayerState = {
  openModalTrackId: null,
};

export const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<string>) => {
      state.openModalTrackId =
        state.openModalTrackId === action.payload ? null : action.payload;
    },
  },
});

export const { toggleModal } = playerSlice.actions;
export default playerSlice.reducer;
