import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TextTitle from "../../../shared/ui/text-title";
import FavoredAlbums from "./ui/favored-albums";
import Loader from "../../../shared/ui/loader";
import FilterAlbums from "../filter-albums/filter-albums";
import UploadAlbum from "../../album/upload-album/upload-album";
import { useGetALbumsByTypeQuery } from "../../../entities/albums/albumApi";
import { decodeJwt } from "../../../shared/utils/decode-jwt";

const ProfileAlbums = () => {
  const { id } = useParams();
  const [filter, setFilter] = React.useState<{
    name: "asc" | "desc" | "";
    date: "asc" | "desc" | "";
  }>({ name: "", date: "" });
  const [filterType, setFilterType] = React.useState<
    "all" | "favored" | "myAlbums"
  >("all");

  const { data, isLoading, isError } = useGetALbumsByTypeQuery({
    id: id ?? "",
    type: filterType,
    name: filter.name,
    date: filter.date,
  });
  const { id: accessId } = decodeJwt() || { id: null };
  const { id: profileId } = useParams();
  const isAuthor = accessId === profileId;
  if (isError) {
    toast.error("Не удалось загрузить альбомы", {
      position: "bottom-right",
    });
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <TextTitle text="Альбомы" />
      <FilterAlbums setFilter={setFilter} />
      <div className="mt-[5px] p-0">
        <div className="h-[calc(100%-300px)]">
          {data?.length ? (
            <FavoredAlbums
              albumsData={data}
              uploadFeature={true}
              isAuthor={isAuthor}
            />
          ) : (
            <UploadAlbum />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileAlbums;
