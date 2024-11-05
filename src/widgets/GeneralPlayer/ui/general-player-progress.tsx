import React, { FC } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import GeneralPlayerPopup from "./general-player-popup";
import usePlayerProgress from "../model/usePlayerProgress";
interface Props {
  audioRef: React.RefObject<HTMLAudioElement>;
  duration: number;
  currentTime: number;
  setCurrentTime: ActionCreatorWithPayload<any, "audio/setCurrentTime">;
}
const GeneralPlayerProgress: FC<Props> = ({
  audioRef,
  duration,
  currentTime,
  setCurrentTime,
}) => {
  const {
    durationContainerRef,
    popupTime,
    popupPosition,
    showPopup,
    setShowPopup,
    handleChangeDuration,
    handleMouseMove,
  } = usePlayerProgress(audioRef, duration, setCurrentTime);
  return (
    <>
      <div
        className="absolute right-0 left-0 bottom-[60px] h-3 bg-[#a9a9a9] cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowPopup(false)}
        onClick={handleChangeDuration}
        ref={durationContainerRef}
      >
        <div
          className="bg-[#fc0] h-full transition-all duration-100 ease-linear"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      {showPopup && (
        <GeneralPlayerPopup
          popupPosition={popupPosition}
          popupTime={popupTime}
        />
      )}
    </>
  );
};

export default GeneralPlayerProgress;
