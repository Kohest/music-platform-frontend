import { useState, useRef } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../app/store/hooks";
const usePlayerProgress = (
  audioRef: React.RefObject<HTMLAudioElement>,
  duration: number,
  setCurrentTime: ActionCreatorWithPayload<any, "audio/setCurrentTime">
) => {
  const durationContainerRef = useRef<HTMLDivElement>(null);
  const [popupTime, setPopupTime] = useState("00:00");
  const [popupPosition, setPopupPosition] = useState(0);
  const dispatch = useAppDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const handleChangeDuration = (event: React.MouseEvent) => {
    if (audioRef.current && durationContainerRef.current) {
      const containerWidth = durationContainerRef.current.clientWidth;
      const clickX =
        event.pageX - durationContainerRef.current.getBoundingClientRect().left;
      const percentage = clickX / containerWidth;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
      dispatch(setCurrentTime(newTime));
    }
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!audioRef.current || !durationContainerRef.current) return;
    const progressBarWidth = durationContainerRef.current.offsetWidth;
    const rect = durationContainerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const hoveredTime = (offsetX / progressBarWidth) * duration;
    setPopupPosition(offsetX);
    setPopupTime(
      `${Math.floor(hoveredTime / 60)}:${String(
        Math.floor(hoveredTime % 60)
      ).padStart(2, "0")}`
    );
    setShowPopup(true);
  };
  return {
    durationContainerRef,
    popupTime,
    popupPosition,
    showPopup,
    setShowPopup,
    handleChangeDuration,
    handleMouseMove,
  };
};
export default usePlayerProgress;
