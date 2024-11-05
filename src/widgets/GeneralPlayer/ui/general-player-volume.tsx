import React, { FC } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import usePlayerVolume from "../model/usePlayerVolume";

interface Props {
  setVolume: ActionCreatorWithPayload<any, "audio/setVolume">;
  audioRef: React.RefObject<HTMLAudioElement>;
  volume: number;
}

const GeneralPlayerVolume: FC<Props> = ({ setVolume, volume, audioRef }) => {
  const {
    volumeRef,
    showVolume,
    setShowVolume,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleVolumeToggle,
    handleMouseLeave,
  } = usePlayerVolume(audioRef, setVolume, volume);

  return (
    <div
      className="absolute right-[15px] top-[10px] z-10"
      onMouseEnter={() => setShowVolume(true)}
    >
      <div
        onMouseLeave={handleMouseLeave}
        className={`absolute bottom-[10px] mb-[65px] z-10 h-[185px] bg-white w-[44px] -right-[2px] group
          ${showVolume ? "animate-volumeExpand" : "animate-volumeShrink"} 
          ${showVolume ? "block" : "hidden"}`}
        style={{ boxShadow: "0 15px 30px rgba(0, 0, 0, .2)" }}
      >
        <div className="absolute bottom-[37px] h-full top-[25px] right-0 w-[42px]">
          <div
            className="w-8 h-[136px] absolute left-1/2 -ml-4"
            ref={volumeRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div className="absolute w-[6px] h-full left-1/2 -ml-[3px] cursor-pointer rounded-[3px] bg-[#e0e0e0]">
              <div
                className="absolute left-0 bottom-0 rounded-[3px] w-[6px] bg-[rgba(255,204,0,.5)]"
                style={{ height: `${volume}%` }}
              >
                <button
                  className="block absolute -top-[9px] -left-[6px] w-[18px] h-[18px] rounded-[9px] cursor-pointer bg-white"
                  style={{ boxShadow: "0 2px 1px rgba(0, 0, 0, 0.35)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 left-0" />
      <div className="opacity-40 relative inline-block cursor-pointer hover:opacity-80">
        <span
          onClick={handleVolumeToggle}
          style={{
            backgroundPosition:
              volume === 0
                ? "0px -56px"
                : volume <= 50
                ? "0px -28px"
                : "0px 0px",
          }}
          className="inline-block bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/volume-sprite.svg')]
            w-7 h-7 m-[6px]"
        />
      </div>
    </div>
  );
};

export default GeneralPlayerVolume;
