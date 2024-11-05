import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import DeleteButton from "./delete-button";
import FavoriteButton from "./favorite-button";
import RemoveFromAlbum from "./remove-from-album";
import PlayerActionModal from "./player-action-modal";
interface Props {
  name: string;
  artist?: string;
  size: "SMALL" | "LARGE";
  trackId: string;
  albumAuthor?: string;
  isFavored: boolean;
  albumId?: string;
  activeUser?: string;
  isAuthor?: boolean;
  toggleFavorite: (trackId: string) => void;
}
const PlayerDetails: FC<Props> = ({
  name,
  artist,
  size,
  activeUser,
  trackId,
  albumId,
  isAuthor,
  albumAuthor,
  isFavored,
  toggleFavorite,
}) => {
  return (
    <div
      className={cn(
        "flex-auto flex flex-row flex-nowrap justify-between w-1/2 items-center"
      )}
    >
      <div className={cn(size === "SMALL" && "flex w-full")}>
        <div className={cn(size === "SMALL" && "basis-[70%]")}>{name}</div>
        <div className={cn("text-[#777]", size === "SMALL" && "hidden")}>
          {artist}
        </div>
      </div>
      <div className="flex items-center absolute right-0">
        {isAuthor && (
          <DeleteButton
            className="group-hover:block hidden"
            trackId={trackId}
          />
        )}
        {albumAuthor === activeUser && albumId && (
          <RemoveFromAlbum
            className="group-hover:block hidden"
            trackId={trackId}
            albumId={albumId}
          />
        )}
        <FavoriteButton
          className="group-hover:block hidden"
          isFavored={isFavored}
          trackId={trackId}
          toggleFavorite={toggleFavorite}
        />
        <PlayerActionModal
          className="group-hover:block hidden"
          trackId={trackId}
        />
      </div>
    </div>
  );
};
export default PlayerDetails;
