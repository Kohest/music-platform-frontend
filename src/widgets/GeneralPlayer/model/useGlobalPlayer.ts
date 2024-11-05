import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import {
  playNextTrack,
  playPreviousTrack,
  setArtist,
  setAudio,
  setCurrentTime,
  setDuration,
  setIsPause,
  setName,
  setPicture,
} from "../../../app/store/audio/audioSlice";
import { getFullUrl } from "../../../shared/utils/get-full-url";

export const useGlobalPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const dispatch = useAppDispatch();
  const { audioSrc, volume, isPause } = useAppSelector(
    (state) => state.audioSlice
  );
  const { trackQueue, currentTrackIndex } = useAppSelector(
    (state) => state.audioSlice
  );
  const handleNextTrack = () => {
    if (trackQueue.length === 1) {
      dispatch(setIsPause(true));
      audioRef.current.pause();
    } else {
      dispatch(playNextTrack());
      const nextTrack = trackQueue[(currentTrackIndex + 1) % trackQueue.length];
      dispatch(setAudio(getFullUrl(nextTrack.audio)));
      dispatch(setName(nextTrack.name));
      dispatch(setArtist(nextTrack.artist));
      dispatch(setPicture(nextTrack.picture));
    }
  };
  const handlePreviousTrack = () => {
    if (trackQueue.length === 1) {
      dispatch(setIsPause(true));
      audioRef.current.pause();
    } else {
      dispatch(playPreviousTrack());
      const previousIndex =
        currentTrackIndex > 0 ? currentTrackIndex - 1 : trackQueue.length - 1;
      const previousTrack = trackQueue[previousIndex];
      dispatch(setAudio(getFullUrl(previousTrack.audio)));
      dispatch(setName(previousTrack.name));
      dispatch(setArtist(previousTrack.artist));
      dispatch(setPicture(previousTrack.picture));
    }
  };
  useEffect(() => {
    audioRef.current.volume = volume / 100;

    const handleLoadedMetadata = () => {
      dispatch(setDuration(audioRef.current?.duration || 0));
    };

    const handleTimeUpdate = () => {
      dispatch(setCurrentTime(audioRef.current?.currentTime || 0));
    };

    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("ended", handleNextTrack);

    return () => {
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener("ended", handleNextTrack);
    };
  }, [volume, currentTrackIndex, trackQueue]);

  useEffect(() => {
    if (audioSrc) {
      audioRef.current.src = audioSrc;
      audioRef.current.play();
    }
  }, [audioSrc]);

  useEffect(() => {
    if (isPause) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [isPause]);

  const handlePlayPause = () => {
    dispatch(setIsPause(!isPause));
  };

  return { audioRef, handlePlayPause, handleNextTrack, handlePreviousTrack };
};
