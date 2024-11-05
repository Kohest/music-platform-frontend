import React, { useCallback, useEffect, useRef, useState } from "react";
import Loader from "../shared/ui/loader";
import { useGetAllTracksQuery } from "../entities/tracks/tracksApi";
import Player from "../widgets/Player/Player";
import { ITrackResponse } from "../entities/tracks/types";
import { useFavoriteItem } from "../shared/hooks/useFavorite";
import Title from "../shared/ui/title";
import { toast } from "react-toastify";

const ChartPage = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const { isItemFavored, toggleFavorite } = useFavoriteItem("track");
  const [tracksCount, setTracksCount] = useState(12);
  const {
    data: songs = [],
    isError,
    isFetching,
  } = useGetAllTracksQuery({ count: tracksCount });
  const loadMoreTracks = useCallback(() => {
    setTracksCount((prevCount) => prevCount + 12);
  }, []);
  useEffect(() => {
    if (songs.length < tracksCount) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isFetching) {
          loadMoreTracks();
        }
      },
      { threshold: 0.4 }
    );
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    return () => {
      if (trackRef.current) {
        observer.unobserve(trackRef.current);
      }
    };
  }, [loadMoreTracks, hasMore, isFetching, songs.length, tracksCount]);
  if (isFetching && tracksCount === 12) {
    return <Loader />;
  }
  if (!songs) return <div>Songs not found</div>;
  if (isError) {
    toast.error("Произошла ошибка при загрузке треков");
  }
  return (
    <div className="w-full inline-block pr-[15px]">
      <Title
        text="Треки, популярные на Яндекс Музыке прямо сейчас"
        className="text-[24px] mt-0"
      />
      {songs.map((audio: ITrackResponse, idx) => (
        <Player
          toggleFavorite={toggleFavorite}
          key={idx}
          track={audio}
          isFavored={isItemFavored(audio._id)}
        />
      ))}
      <div ref={trackRef} className="w-full h-[100px]">
        {isFetching && <Loader />}
      </div>
      {!hasMore && <p className="text-center mt-4">Больше треков нет</p>}
    </div>
  );
};

export default ChartPage;
