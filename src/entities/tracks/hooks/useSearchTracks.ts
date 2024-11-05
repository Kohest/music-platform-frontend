import { useSearchParams } from "react-router-dom";
import { useSearchTrackQuery } from "../tracksApi";
import { useEffect, useState } from "react";

const useSearchTracks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("text");
  const typeQuery = searchParams.get("type");

  const { data, error, isFetching } = useSearchTrackQuery({
    text: searchQuery || "",
    type: typeQuery || "all",
  });

  const [trackLength, setTrackLength] = useState<number>(0);
  const [albumLength, setAlbumLength] = useState<number>(0);

  useEffect(() => {
    if (data && data.tracks && data.albums) {
      setTrackLength(data.tracks?.length || 0);
      setAlbumLength(data.albums?.length || 0);
    }
  }, [data]);

  return {
    searchParams,
    setSearchParams,
    data,
    trackLength,
    albumLength,
    error,
    isFetching,
  };
};

export default useSearchTracks;
