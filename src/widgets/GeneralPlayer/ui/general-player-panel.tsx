import React, { FC } from "react";
import GeneralPlayerPlayStop from "./general-player-play-stop";
import GeneralPlayerChangeTrack from "./general-player-change-track";
import GeneralPlayerSong from "./general-player-song";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../app/store/hooks";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  play: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
  handlePlayPause: () => void;
  isRepeat: boolean;
  handlePlayNext: () => void;
  handlePlayPrevious: () => void;
  setIsRepeat: ActionCreatorWithPayload<boolean, "audio/setIsRepeat">;
}
const GeneralPlayerPanel: FC<Props> = ({
  play,
  handlePlayPause,
  setIsRepeat,
  handlePlayNext,
  handlePlayPrevious,
  audioRef,
  isRepeat,
}) => {
  const dispatch = useAppDispatch();
  const handleLoop = (audioRef: React.RefObject<HTMLAudioElement>) => {
    if (audioRef.current) {
      dispatch(setIsRepeat(!isRepeat));
      audioRef.current.loop = !isRepeat;
    }
  };

  return (
    <div className="absolute top-0 pl-4 w-full bg-white/95 ">
      <GeneralPlayerChangeTrack side="PREV" onClick={handlePlayPrevious} />
      <GeneralPlayerPlayStop isPlay={play} handlePlayPause={handlePlayPause} />
      <GeneralPlayerChangeTrack side="NEXT" onClick={handlePlayNext} />
      <div className="absolute right-[50px] top-0">
        <div
          className=" w-10 h-10 mr-2 py-[10px] cursor-pointer"
          onClick={() => handleLoop(audioRef)}
        >
          <div
            className={cn(
              "m-[6px] w-7 h-7 bg-cover bg-no-repeat duration-100",
              isRepeat
                ? "bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/repeat-gold.svg')] opacity-80"
                : "bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/repeat.svg')] opacity-40 hover:opacity-80"
            )}
          />
        </div>
      </div>
      <GeneralPlayerSong />
    </div>
  );
};

export default GeneralPlayerPanel;
