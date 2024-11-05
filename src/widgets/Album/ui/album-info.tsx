import React, { FC } from "react";
import { Link } from "react-router-dom";
import AlbumActionButton from "../../../features/album/album-action-button/album-action-button";
interface Props {
  title: string;
  albumId: string;
  artist?: string;
  year: number;
  toggleFavorite: (albumId: string) => void;
  isAlbumFavored: boolean | undefined;
}
const AlbumInfo: FC<Props> = ({
  title,
  albumId,
  year,
  artist,
  isAlbumFavored,
  toggleFavorite,
}) => {
  return (
    <div className="flex flex-row">
      <div className="w-full min-w-[164px]">
        <div className="min-h-10 flex flex-col gap-1 flex-nowrap text-[14px] leading-[20px]">
          <Link
            to="/"
            className="w-[150px] duration-100 z-10 hover:!text-[#f33]"
          >
            {title}
          </Link>
          {artist && (
            <Link
              to={"/"}
              className="text-[#777] duration-100 z-10 hover:!text-[#f33]"
            >
              {artist}
            </Link>
          )}
        </div>
        <div className="text-[#777] mt-1 leading-[18px] w-full">
          <span className="relative flex items-center justify-between w-full">
            <AlbumActionButton
              icon="https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/heart.svg"
              actionType="FAVORITE"
              itemId={albumId}
              isAlbumFavored={isAlbumFavored}
              toggleFavorite={toggleFavorite}
              style="MINI"
            />
            <span>{year}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
