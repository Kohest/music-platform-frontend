import React, { FC, useEffect, useState } from "react";
import { cn } from "../utils/cnUtil";
import { ITrackResponse } from "../../entities/tracks/types";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
  setActiveQueueItemId,
  setArtist,
  setAudio,
  setCurrentTrackIndex,
  setIsPause,
  setName,
  setPicture,
  setQueue,
} from "../../app/store/audio/audioSlice";
import { getFullUrl } from "../utils/get-full-url";
import { useGetAlbumByIdQuery } from "../../entities/albums/albumApi";
import pause from "../../shared/assets/images/mini-pause.svg";

enum Size {
  SMALL = "SMALL",
  LARGE = "LARGE",
}

interface Props {
  size?: keyof typeof Size;
  className?: string;
  tracksQueue?: ITrackResponse[];
  itemId: string;
}

const AlbumPlayButton: FC<Props> = ({
  size = "LARGE",
  className,
  tracksQueue,
  itemId,
}) => {
  const dispatch = useAppDispatch();
  const { activeQueueItemId, isPause } = useAppSelector(
    (state) => state.audioSlice
  );
  const [shouldFetchAlbum, setShouldFetchAlbum] = useState(false);
  const { data: album, isFetching } = useGetAlbumByIdQuery(itemId, {
    skip: !shouldFetchAlbum,
  });

  const handlePlay = (tracks: ITrackResponse[]) => {
    if (tracks.length === 0) {
      return;
    }
    dispatch(setQueue(tracks));
    dispatch(setActiveQueueItemId(itemId));
    const playerAudio = getFullUrl(tracks[0].audio);
    dispatch(setAudio(playerAudio));
    dispatch(setName(tracks[0].name));
    dispatch(setArtist(tracks[0].artist));
    dispatch(setPicture(tracks[0].picture));
    dispatch(setCurrentTrackIndex(0));
    dispatch(setIsPause(false));
  };

  const currentTracksQueue = tracksQueue || album?.tracks;
  const handleAddQueue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (currentTracksQueue && currentTracksQueue.length > 0) {
      if (activeQueueItemId === itemId) {
        dispatch(setIsPause(!isPause));
      } else {
        handlePlay(currentTracksQueue);
      }
    } else if (!tracksQueue && !isFetching) {
      setShouldFetchAlbum(true);
    }
  };

  useEffect(() => {
    if (album && !tracksQueue && shouldFetchAlbum) {
      handlePlay(album.tracks);
      setShouldFetchAlbum(false);
    }
  }, [album, tracksQueue, shouldFetchAlbum]);
  const backgroundImage =
    activeQueueItemId === itemId && !isPause
      ? `url(${pause})`
      : `url(https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/play-small.svg)`;

  return (
    <span className={cn("inline-block", className)}>
      <button
        disabled={isFetching || currentTracksQueue?.length === 0}
        onClick={handleAddQueue}
        className={cn(
          "w-[58px] h-[58px] m-auto block bg-[#ffd633] hover:scale-110 duration-200 rounded-[50%] inline-block opacity-80 hover:opacity-100",
          size === "SMALL" && "w-10 h-10"
        )}
      >
        <span
          className={cn(
            "w-10 h-10 inline-block bg-cover bg-no-repeat align-top",
            size === "SMALL" && "align-top w-6 h-6"
          )}
          style={{ backgroundImage }}
        />
      </button>
    </span>
  );
};

export default AlbumPlayButton;
