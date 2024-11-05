import { createSlice } from "@reduxjs/toolkit";
import { ITrackResponse } from "../../../entities/tracks/types";
interface initialState {
  audioSrc: string | undefined;
  isRepeat: boolean;
  isPause: boolean;
  name: string;
  artist: string;
  picture: string;
  volume: number;
  duration: number;
  currentTime: number;
  trackQueue: ITrackResponse[];
  currentTrackIndex: number;
  activeQueueItemId: string;
}
const initialState: initialState = {
  audioSrc: undefined,
  currentTrackIndex: 0,
  isRepeat: false,
  name: "",
  artist: "",
  picture: "",
  activeQueueItemId: "",
  isPause: true,
  volume: 10,
  duration: 0,
  currentTime: 0,
  trackQueue: [],
};
export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setAudio: (state, action) => {
      state.audioSrc = action.payload;
    },
    setIsRepeat: (state, action) => {
      state.isRepeat = action.payload;
    },
    setIsPause: (state, action) => {
      state.isPause = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setArtist: (state, action) => {
      state.artist = action.payload;
    },
    setPicture: (state, action) => {
      state.picture = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setQueue: (state, action) => {
      state.trackQueue = action.payload;
    },
    setCurrentTrackIndex: (state, action) => {
      state.currentTrackIndex = action.payload;
    },
    playNextTrack: (state) => {
      if (state.currentTrackIndex < state.trackQueue.length - 1) {
        state.currentTrackIndex += 1;
      } else {
        state.currentTrackIndex = 0;
      }
    },
    playPreviousTrack: (state) => {
      if (state.currentTrackIndex > 0) {
        state.currentTrackIndex -= 1;
      } else {
        state.currentTrackIndex = state.trackQueue.length - 1;
      }
    },
    setActiveQueueItemId: (state, action) => {
      state.activeQueueItemId = action.payload;
    },
  },
});
export const {
  setAudio,
  setIsRepeat,
  setIsPause,
  setActiveQueueItemId,
  setVolume,
  setQueue,
  setName,
  playNextTrack,
  playPreviousTrack,
  setCurrentTrackIndex,
  setArtist,
  setPicture,
  setDuration,
  setCurrentTime,
} = audioSlice.actions;
export default audioSlice.reducer;
