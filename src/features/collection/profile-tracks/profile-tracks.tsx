import React, { useEffect, useState } from "react";
import TextTitle from "../../../shared/ui/text-title";
import TracksFilter from "./ui/tracks-filter";
import { useGetFavoredTracksQuery } from "../../../entities/tracks/tracksApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FavoredTracks from "./ui/FavoredTracks";
import EmptyList from "../../../shared/ui/empty-list";
import Loader from "../../../shared/ui/loader";
import SortMenu from "./ui/sort-menu";
const ProfileTracks = () => {
  const { id } = useParams();
  const [filterType, setFilterType] = useState<"all" | "favored" | "myTracks">(
    "all"
  );
  const [titleFilter, setTitleFilter] = useState<"asc" | "desc">("asc");
  const [artistFilter, setArtistFilter] = useState<"asc" | "desc">("asc");
  const { data, isError, isFetching } = useGetFavoredTracksQuery({
    id: id ?? "",
    type: filterType,
    title: titleFilter,
    artist: artistFilter,
  });
  if (isError) {
    toast.error("Не удалось загрузить треки", {
      position: "bottom-right",
    });
  }
  if (isFetching) {
    return <Loader />;
  }
  return (
    <div>
      <div className="h-[30px] relative flex justify-between">
        <TextTitle text="Треки" />
        <SortMenu
          filterType={filterType}
          setFilterType={setFilterType}
          isFetching={isFetching}
        />
      </div>
      <div className="-mr-[10px] -ml-[15px]">
        <TracksFilter
          artistFilter={artistFilter}
          titleFilter={titleFilter}
          setArtistFilter={setArtistFilter}
          setTitleFilter={setTitleFilter}
        />
        <div className="h-[calc(100%-80px)]">
          {data?.length ? (
            <FavoredTracks tracksData={data} />
          ) : (
            <EmptyList
              title="Пока нет треков"
              subtitle="Создайте плейлист или используйте сердечко, чтобы добавить треки в этот раздел."
              image="https://music.yandex.ru/blocks/d-empty/like.png"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfileTracks;
