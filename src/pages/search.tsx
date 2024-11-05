import PageContainer from "../shared/ui/page-container";
import TitleSmall from "../shared/ui/title-small";
import SearchFilterMenu from "../widgets/search-filter-menu/search-filter-menu";
import useSearchTracks from "../entities/tracks/hooks/useSearchTracks";
import FavoredAlbums from "../features/collection/profile-albums/ui/favored-albums";
import FavoredTracks from "../features/collection/profile-tracks/ui/FavoredTracks";
import { toast } from "react-toastify";
import Loader from "../shared/ui/loader";
import { useEffect } from "react";

const SearchPage = () => {
  const {
    searchParams,
    setSearchParams,
    data,
    trackLength,
    albumLength,
    error,
    isFetching,
  } = useSearchTracks();

  if (isFetching) return <Loader />;
  if (error) {
    toast.error("Не удалось загрузить треки", {
      position: "bottom-right",
    });
  }
  const isEmpty =
    !data ||
    (data?.tracks &&
      data.tracks.length === 0 &&
      data?.albums &&
      data.albums.length === 0);
  const typeQuery = searchParams.get("type");
  return (
    <PageContainer>
      {!isEmpty ? (
        <div className="min-h-[350px]">
          <SearchFilterMenu
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            trackLength={trackLength}
            albumLength={albumLength}
          />
          {typeQuery === "tracks" && trackLength > 0 && (
            <div className="mt-10 mb-20 relative">
              <TitleSmall title="Треки" href="/" subtitle="Найденные треки" />
              <FavoredTracks tracksData={data.tracks || []} />
            </div>
          )}
          {typeQuery === "albums" && albumLength > 0 && (
            <div className="mt-10 mb-20 relative">
              <TitleSmall
                title="Альбомы"
                href="/"
                subtitle="Найденные альбомы"
              />
              <FavoredAlbums
                albumsData={data.albums || []}
                uploadFeature={false}
              />
            </div>
          )}
          {typeQuery === "all" && (
            <div>
              {data?.tracks && trackLength > 0 && (
                <div className="mt-10 mb-20 relative">
                  <TitleSmall
                    title="Треки"
                    href="/"
                    subtitle="Найденные треки"
                  />
                  <FavoredTracks tracksData={data.tracks || []} />
                </div>
              )}
              {data?.albums && albumLength > 0 && (
                <div className="mt-10 mb-20 relative">
                  <TitleSmall
                    title="Альбомы"
                    href="/"
                    subtitle="Найденные альбомы"
                  />
                  <FavoredAlbums
                    albumsData={data.albums || []}
                    uploadFeature={false}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="min-h-[350px] text-[16px]">
          В библиотеке Музыки пока нет исполнителей, альбомов и треков с таким
          названием.
        </div>
      )}
    </PageContainer>
  );
};

export default SearchPage;
