import React, { FC } from "react";
import AlbumActionButton from "../../../features/album/album-action-button/album-action-button";
import AlbumPlayButton from "../../../shared/ui/album-play-button";
interface Props {
  albumId: string;
  userId: string;
  toggleFavorite: (albumId: string) => void;
  isAlbumFavored: boolean | undefined;
}
const AlbumActions: FC<Props> = ({
  albumId,
  userId,
  isAlbumFavored,
  toggleFavorite,
}) => {
  return (
    <div className="absolute top-[10px] left-[10px] right-[10px] h-[200px] group-hover:bg-black/50">
      <div className="absolute top-1/2 left-0 right-0 h-[58px] -mt-[29px] text-center hidden group-hover:flex justify-center items-center gap-[10px]">
        <AlbumActionButton
          isAlbumFavored={isAlbumFavored}
          toggleFavorite={toggleFavorite}
          itemId={albumId}
          actionType="FAVORITE"
          icon="https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/black/heart.svg"
        />
        <AlbumPlayButton itemId={albumId} />
        <AlbumActionButton
          userId={userId}
          buttonLink="albums"
          itemId={albumId}
          actionType="SHARE"
          icon="https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/black/share.svg"
        />
      </div>
    </div>
  );
};

export default AlbumActions;
