import React from "react";
import { useGetAlbumByIdQuery } from "../entities/albums/albumApi";
import { useParams } from "react-router-dom";
import Loader from "../shared/ui/loader";
import DrawerInfo from "../widgets/Drawer/ui/drawer-info/drawer-info";
import AlbumImage from "../widgets/Album/ui/album-image";
import PageContainer from "../shared/ui/page-container";
import DrawerTracks from "../widgets/Drawer/ui/drawer-tracks";
import { decodeJwt } from "../shared/utils/decode-jwt";
import ErrorPage from "../shared/ui/error-page";

const AlbumPage = () => {
  const { albumId } = useParams();
  const { data, isFetching, error } = useGetAlbumByIdQuery(albumId || "");
  if (isFetching) {
    return <Loader />;
  }
  if (error || !data || !albumId) {
    return <ErrorPage />;
  }
  const { id } = decodeJwt() || { id: null };

  const isAuthor = id === data.userId;
  return (
    <PageContainer>
      <>
        <div className="flex justify-between w-full gap-6">
          <AlbumImage
            className="h-[240px] w-[240px]"
            picture={data.picture}
            isAuthor={isAuthor}
            albumId={albumId}
          />
          <DrawerInfo
            tracksQueue={data.tracks}
            isAuthor={isAuthor}
            titleSize="large"
            itemId={albumId}
            genre={data.genre}
            title={data.title}
            userId={data.userId}
            year={data.year}
            artist={data.artist}
          />
        </div>
        <div className="-mx-[7px] relative mt-[30px]">
          <DrawerTracks albumData={data} type="large" />
        </div>
      </>
    </PageContainer>
  );
};

export default AlbumPage;
