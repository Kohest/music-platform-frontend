import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../shared/ui/loader";
import DrawerInfo from "../widgets/Drawer/ui/drawer-info/drawer-info";
import PageContainer from "../shared/ui/page-container";
import { decodeJwt } from "../shared/utils/decode-jwt";
import { useGetTrackByIdQuery } from "../entities/tracks/tracksApi";
import { getFullUrl } from "../shared/utils/get-full-url";
import ErrorPage from "../shared/ui/error-page";

const AlbumPage = () => {
  const { trackId } = useParams();
  const { data, isFetching, isError } = useGetTrackByIdQuery(trackId || "");
  if (isFetching) {
    return <Loader />;
  }
  if (isError || !data || !trackId) {
    return <ErrorPage />;
  }
  const { id } = decodeJwt() || { id: null };
  const pictureBg = data.picture
    ? `url(${getFullUrl(data.picture)})`
    : `url('https://music.yandex.ru/blocks/playlist-cover/playlist-cover_no_cover1.png')`;

  const isAuthor = id === data.userId;
  return (
    <PageContainer>
      <>
        <div className="flex justify-between w-full gap-6">
          <div className={"mb-[10px] w-[240px] h-[240px]"}>
            <div
              style={{ backgroundImage: pictureBg }}
              className="w-full h-full bg-cover bg-no-repeat"
            />
          </div>
          <DrawerInfo
            infoType="track"
            isAuthor={isAuthor}
            titleSize="large"
            itemId={trackId}
            title={data.name}
            userId={data.userId}
            artist={data.artist}
            tracksQueue={[data]}
          />
        </div>
      </>
    </PageContainer>
  );
};

export default AlbumPage;
