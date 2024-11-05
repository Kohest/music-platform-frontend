import React, { FC } from "react";
import Album from "../../../../widgets/Album/album";
import UploadAlbum from "../../../album/upload-album/upload-album";
import { IAlbumResponse } from "../../../../entities/albums/types";
import { useFavoriteItem } from "../../../../shared/hooks/useFavorite";
interface Props {
  albumsData: IAlbumResponse[];
  uploadFeature: boolean;
  isAuthor?: boolean;
}
const FavoredAlbums: FC<Props> = ({
  albumsData,
  uploadFeature,
  isAuthor = false,
}) => {
  console.log(isAuthor);
  const { isItemFavored, toggleFavorite } = useFavoriteItem("album");
  return (
    <div className="-mx-[15px]">
      {uploadFeature && isAuthor && <UploadAlbum />}
      {albumsData.map((album, index) => (
        <Album
          userId={album.userId}
          year={album.year}
          artist={album.artist}
          toggleFavorite={toggleFavorite}
          isAlbumFavored={isItemFavored(album._id)}
          title={album.title}
          picture={album.picture}
          key={index}
          albumId={album._id}
        />
      ))}
    </div>
  );
};

export default FavoredAlbums;
