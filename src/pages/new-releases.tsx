import React, { useState, useEffect, useRef, useCallback } from "react";
import { useGetAllAlbumsQuery } from "../entities/albums/albumApi";
import { useFavoriteItem } from "../shared/hooks/useFavorite";
import Loader from "../shared/ui/loader";
import Title from "../shared/ui/title";
import Album from "../widgets/Album/album";

const NewReleasesPage = () => {
  const [albumCount, setAlbumCount] = useState(12);
  const [hasMore, setHasMore] = useState(true);
  const { isItemFavored, toggleFavorite } = useFavoriteItem("album");
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const {
    data: albums = [],
    isError: albumsError,
    isFetching: albumsIsLoading,
  } = useGetAllAlbumsQuery({ count: albumCount });

  const loadMoreAlbums = useCallback(() => {
    setAlbumCount((prevCount) => prevCount + 12);
  }, []);
  useEffect(() => {
    if (albums.length < albumCount) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !albumsIsLoading) {
          loadMoreAlbums();
        }
      },
      { threshold: 0.4 }
    );
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMoreAlbums, hasMore, albumsIsLoading, albumCount, albums.length]);
  if (albumsIsLoading && albumCount === 12) {
    return <Loader />;
  }
  if (albumsError) {
    return <div>Error loading albums</div>;
  }

  return (
    <div className="relative mb-10">
      <Title text="Новые треки, альбомы и сборники" className="text-[24px]" />
      <div className="-mx-[15px]">
        {albums.map((album) => (
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
      <div ref={loadMoreRef} className="w-full h-[100px]">
        {albumsIsLoading && <Loader />}
      </div>
      {!hasMore && <p className="text-center mt-4">Больше альбомов нет</p>}
    </div>
  );
};

export default NewReleasesPage;
