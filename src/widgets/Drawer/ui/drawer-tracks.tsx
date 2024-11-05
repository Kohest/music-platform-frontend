import React, { FC } from "react";
import Player from "../../Player/Player";
import { IAlbumResponse } from "../../../entities/albums/types";
import { useGetMultipleTracksQuery } from "../../../entities/tracks/tracksApi";
import Loader from "../../../shared/ui/loader";
import { decodeJwt } from "../../../shared/utils/decode-jwt";
import { useFavoriteItem } from "../../../shared/hooks/useFavorite";

enum TracksType {
  small = "small",
  large = "large",
}

interface Props {
  albumData: IAlbumResponse;
  type: keyof typeof TracksType;
}

const DrawerTracks: FC<Props> = ({ albumData, type = "large" }) => {
  const { isItemFavored, toggleFavorite } = useFavoriteItem("track");
  const { id } = decodeJwt() || {};
  return (
    <div>
      <div className="h-[calc(100%-240px)]">
        {albumData.tracks?.map((item, index) => (
          <Player
            albumQueue={albumData.tracks}
            track={item}
            activeUser={id}
            albumId={albumData._id}
            isAuthor={item.userId === id}
            albumAuthor={albumData.userId}
            displayId={(index + 1).toString()}
            key={item._id}
            isFavored={isItemFavored(item._id)}
            toggleFavorite={toggleFavorite}
            {...(type === "small" && {
              size: "SMALL",
            })}
            {...(type === "large" && {
              picture: item.picture,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default DrawerTracks;
