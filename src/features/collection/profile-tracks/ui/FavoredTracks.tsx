import React, { FC } from "react";
import Player from "../../../../widgets/Player/Player";
import { ITrackResponse } from "../../../../entities/tracks/types";
import { decodeJwt } from "../../../../shared/utils/decode-jwt";
import { useFavoriteItem } from "../../../../shared/hooks/useFavorite";
interface Props {
  tracksData: ITrackResponse[];
}
const FavoredTracks: FC<Props> = ({ tracksData }) => {
  const { isItemFavored, toggleFavorite } = useFavoriteItem("track");
  const { id } = decodeJwt() || {};
  return (
    <div>
      {tracksData.map((track, index) => (
        <Player
          track={track}
          isAuthor={id === track.userId}
          toggleFavorite={toggleFavorite}
          key={index}
          isFavored={isItemFavored(track._id)}
          displayId={(index + 1).toString()}
          size="LARGE"
        />
      ))}
    </div>
  );
};

export default FavoredTracks;
