import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import { getFullUrl } from "../../../shared/utils/get-full-url";
import { useAppDispatch } from "../../../app/store/hooks";
import MiniPlay from "../../../shared/assets/images/mini-play.svg";
import MiniPause from "../../../shared/assets/images/mini-pause.svg";
import {
  setActiveQueueItemId,
  setArtist,
  setAudio,
  setCurrentTrackIndex,
  setIsPause,
  setName,
  setPicture,
  setQueue,
} from "../../../app/store/audio/audioSlice";
import { ITrackResponse } from "../../../entities/tracks/types";

interface Props {
  track: ITrackResponse;
  albumQueue?: ITrackResponse[];
  audioSrc: string | undefined;
  playerAudio: string | undefined;
  isPause: boolean;
}

const PlayButton: FC<Props> = ({ track, albumQueue, isPause, audioSrc }) => {
  const dispatch = useAppDispatch();
  const queue = albumQueue ? albumQueue : [track];
  const queueIndex =
    albumQueue?.findIndex((item) => item._id === track._id) ?? 0;
  const handleClickPlay = () => {
    const playerAudio = getFullUrl(track.audio);
    const isTrackInQueue = albumQueue?.some(
      (queuedTrack) => queuedTrack._id === track._id
    );
    if (audioSrc === playerAudio) {
      dispatch(setIsPause(!isPause));
    } else {
      if (!isTrackInQueue) {
        dispatch(setActiveQueueItemId(track._id));
        dispatch(setQueue(queue));
      }
      dispatch(setAudio(playerAudio));
      dispatch(setName(track.name));
      dispatch(setArtist(track.artist));
      dispatch(setPicture(track.picture));
      dispatch(setCurrentTrackIndex(queueIndex));
      dispatch(setIsPause(false));
    }
  };
  const isCurrentAudio = audioSrc === getFullUrl(track.audio);
  const backgroundImage =
    isCurrentAudio && !isPause ? `url(${MiniPause})` : `url(${MiniPlay})`;
  return (
    <div
      className="absolute top-1/2 w-[50px] h-[50px] mt-[-25px] z-[10]"
      onClick={(e) => {
        e.stopPropagation();
        handleClickPlay();
      }}
    >
      <span className="absolute top-[10px] left-[10px] inline-block">
        <button
          className={cn(
            "hidden group-hover:block bg-[#ffdb4d] w-[30px] h-[30px] rounded-[50%]",
            audioSrc === getFullUrl(track.audio) && isPause ? "block" : "hidden"
          )}
        >
          <span
            className="inline-block opacity-80 m-[3px] w-6 h-6 bg-cover bg-no-repeat"
            style={{ backgroundImage }}
          ></span>
        </button>
      </span>
    </div>
  );
};

export default PlayButton;
