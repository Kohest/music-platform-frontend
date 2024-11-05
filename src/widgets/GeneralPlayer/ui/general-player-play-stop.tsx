import React, { FC } from "react";
import Play from "../../../shared/assets/images/play.svg";
import Pause from "../../../shared/assets/images/pause.svg";
interface Props {
  isPlay: boolean;
  handlePlayPause: () => void;
}
const GeneralPlayerPlayStop: FC<Props> = ({ isPlay, handlePlayPause }) => {
  return (
    <div
      className=" mr-2 py-[10px] opacity-40 inline-block cursor-pointer align-top hover:opacity-80"
      onClick={handlePlayPause}
    >
      <div
        className={`m-[6px] w-7 h-7
        bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(${isPlay ? Play : Pause})`,
        }}
      />
    </div>
  );
};

export default GeneralPlayerPlayStop;
