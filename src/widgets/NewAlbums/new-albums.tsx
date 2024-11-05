import React, { FC } from "react";
import Album from "../Album/album";
import { useGetAllAlbumsQuery } from "../../entities/albums/albumApi";
import Loader from "../../shared/ui/loader";
import { useFavoriteItem } from "../../shared/hooks/useFavorite";
import TitleSmall from "../../shared/ui/title-small";

type Props = {};

const NewAlbums: FC<Props> = ({}) => {
  const {
    data: albums,
    error: albumsError,
    isLoading: albumsIsLoading,
  } = useGetAllAlbumsQuery({ count: 4 });
  const { isItemFavored, toggleFavorite } = useFavoriteItem("album");
  if (albumsIsLoading) {
    return <Loader />;
  }
  if (albumsError) {
    return <div>Error</div>;
  }
  return (
    <div className="relative mb-20">
      <TitleSmall
        href="/home/new-releases"
        title="Новые альбомы"
        subtitle="Список новейших сборников"
      />
      <div className="-mx-[15px]">
        {albums?.map((album) => (
          <Album
            userId={album.userId}
            year={album.year}
            artist={album.artist}
            isAlbumFavored={isItemFavored(album._id)}
            toggleFavorite={toggleFavorite}
            albumId={album._id}
            title={album.title}
            picture={album.picture}
            key={album._id}
          />
        ))}
      </div>
    </div>
  );
};

export default NewAlbums;
