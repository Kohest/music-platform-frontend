import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { cn } from "../../shared/utils/cnUtil";
import PlayButton from "./ui/play-button";
import PlayerPicture from "./ui/player-picture";
import PlayerDetails from "./ui/player-details";
import PlayerModal from "../../features/player/player-modal/player-modal";
import {
  openDrawer,
  setActiveAlbumId,
  setActiveTrackId,
} from "../../app/store/drawer/drawerSlice";
import { ITrackResponse } from "../../entities/tracks/types";
import { getFullUrl } from "../../shared/utils/get-full-url";
enum SizeType {
  SMALL = "SMALL",
  LARGE = "LARGE",
}
interface Props {
  displayId?: string;
  toggleFavorite: (trackId: string) => void;
  albumAuthor?: string;
  isFavored?: boolean;
  isAuthor?: boolean;
  track: ITrackResponse;
  size?: keyof typeof SizeType;
  albumId?: string;
  albumQueue?: ITrackResponse[];
  activeUser?: string;
}
const Player: FC<Props> = ({
  displayId,
  albumId,
  isAuthor,
  albumQueue,
  albumAuthor,
  toggleFavorite,
  activeUser,
  track,
  isFavored = false,
  size = "LARGE",
}) => {
  const { openModalTrackId } = useAppSelector((state) => state.playerSlice);
  const { audioSrc, isPause } = useAppSelector((state) => state.audioSlice);
  const dispatch = useAppDispatch();
  const playerAudio = getFullUrl(track.audio);
  const handleDrawerClick = () => {
    dispatch(setActiveTrackId(track._id));
    dispatch(setActiveAlbumId(""));
    dispatch(openDrawer(true));
  };
  return (
    <div
      className={cn(
        `relative min-h-[50px] h-auto pt-[7px] pb-[7px] pl-[7px] flex items-center
      justify-between leading-[20px] cursor-pointer flex-row flex-nowrap group after:hidden
      hover:after:block after:absolute after:border-[2px] after:border-[#ffdb4d]
      after:cursor-pointer after:h-[66px] after:w-full`,
        size === "SMALL" && "pl-0 after:border-none pb-0 pt-0"
      )}
      onClick={handleDrawerClick}
    >
      <div
        className={cn(
          "pl-[23px] mr-[10px] h-[50px] basis-[75px] w-10 min-h-[20px] relative",
          size === "SMALL" && "pl-0 basis-[20px] mr-[5px]"
        )}
      >
        {track.picture && size === "LARGE" ? (
          <PlayerPicture
            picture={track.picture}
            audioSrc={audioSrc}
            playerAudio={playerAudio}
            isPause={isPause}
          />
        ) : (
          <div className="text-[#777] flex justify-center items-center h-[50px] w-[50px] text-center">
            {audioSrc === playerAudio && !isPause ? (
              <span className="inline-block w-4 h-4 bg-[#ffdb4d] rounded-[50%] animate-scale" />
            ) : (
              displayId
            )}
          </div>
        )}
        <PlayButton
          albumQueue={albumQueue}
          track={track}
          audioSrc={audioSrc}
          playerAudio={playerAudio}
          isPause={isPause}
        />
      </div>
      <PlayerDetails
        activeUser={activeUser}
        isFavored={isFavored}
        name={track.name}
        albumAuthor={albumAuthor}
        size={size}
        albumId={albumId}
        toggleFavorite={toggleFavorite}
        trackId={track._id}
        artist={track.artist}
        isAuthor={isAuthor}
      />
      {openModalTrackId === track._id && <PlayerModal />}
    </div>
  );
};
export default Player;
