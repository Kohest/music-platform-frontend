import { useState, useRef } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../app/store/hooks";

const usePlayerVolume = (
  audioRef: React.RefObject<HTMLAudioElement>,
  setVolume: ActionCreatorWithPayload<any, "audio/setVolume">,
  volume: number
) => {
  const dispatch = useAppDispatch();
  const volumeRef = useRef<HTMLDivElement>(null);
  const [showVolume, setShowVolume] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const updateVolume = (clientY: number) => {
    if (!volumeRef.current || !audioRef.current) return;
    const rect = volumeRef.current.getBoundingClientRect();
    const clickY = clientY - rect.top;
    const newVolume = 100 - (clickY / rect.height) * 100;
    const clampedVolume = Math.max(0, Math.min(100, newVolume));
    dispatch(setVolume(clampedVolume));
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateVolume(e.clientY);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateVolume(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleVolumeToggle = () => {
    if (audioRef.current) {
      const newVolume = audioRef.current.volume === 0 ? 100 : 0;
      audioRef.current.volume = newVolume / 100;
      dispatch(setVolume(newVolume));
    }
  };
  const handleMouseLeave = () => {
    if (!isDragging) {
      setShowVolume(false);
    }
  };
  return {
    volumeRef,
    showVolume,
    setShowVolume,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleVolumeToggle,
    handleMouseLeave,
  };
};

export default usePlayerVolume;
