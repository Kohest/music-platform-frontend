import React, { FC } from "react";
import Player from "../Player/Player";
import { ITrackResponse } from "../../entities/tracks/types";
import { useFavoriteItem } from "../../shared/hooks/useFavorite";
interface Props {
  audioList: ITrackResponse[];
}
const ChartColumn: FC<Props> = ({ audioList }) => {
  const { isItemFavored, toggleFavorite } = useFavoriteItem("track");
  return (
    <div className="w-1/2 inline-block pr-[15px] align-top">
      {audioList.map((audio: ITrackResponse, idx) => (
        <Player
          track={audio}
          toggleFavorite={toggleFavorite}
          key={idx}
          isFavored={isItemFavored(audio._id)}
        />
      ))}
    </div>
  );
};

export default ChartColumn;
