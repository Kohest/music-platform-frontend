import React, { FC } from "react";
import AlbumInfo from "./ui/album-info";
import AlbumImage from "./ui/album-image";
import {
  openDrawer,
  setActiveAlbumId,
  setActiveTrackId,
} from "../../app/store/drawer/drawerSlice";
import { useAppDispatch } from "../../app/store/hooks";
import AlbumActions from "./ui/album-actions";

interface Props {
  title: string;
  picture?: string;
  albumId: string;
  artist?: string;
  year: number;
  userId: string;
  toggleFavorite: (albumId: string) => void;
  isAlbumFavored: boolean | undefined;
}

const Album: FC<Props> = ({
  title,
  picture,
  artist,
  albumId,
  userId,
  year,
  isAlbumFavored,
  toggleFavorite,
}) => {
  const dispatch = useAppDispatch();
  const handleDrawerClick = () => {
    dispatch(setActiveAlbumId(albumId));
    dispatch(setActiveTrackId(""));
    dispatch(openDrawer(true));
  };
  return (
    <div
      onClick={handleDrawerClick}
      className="cursor-pointer relative h-auto min-h-[270px] w-[220px] p-[10px] m-[5px] group
      inline-block align-top before:hidden before:hover:block before:absolute before:border-[2px] before:border-[#ffdb4d] 
      before:top-0 before:left-0 before:right-0 before:bottom-0"
    >
      <AlbumActions
        userId={userId}
        albumId={albumId}
        isAlbumFavored={isAlbumFavored}
        toggleFavorite={toggleFavorite}
      />
      <AlbumImage picture={picture} />
      <AlbumInfo
        year={year}
        artist={artist}
        title={title}
        albumId={albumId}
        isAlbumFavored={isAlbumFavored}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default Album;
