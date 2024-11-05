import React, { FC } from "react";
interface Props {
  currentTime: number;
  duration: number;
}
const GeneralPlayerTime: FC<Props> = ({ currentTime, duration }) => {
  const formatTime = (time: number) =>
    `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(
      2,
      "0"
    )}`;
  return (
    <div className="absolute w-full h-4 z-40 left-0 top-0 flex justify-between px-1">
      <div>{formatTime(currentTime)}</div>
      <div>{formatTime(duration)}</div>
    </div>
  );
};

export default GeneralPlayerTime;
