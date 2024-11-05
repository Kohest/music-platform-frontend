import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { openDrawer } from "../../app/store/drawer/drawerSlice";
import X from "../../shared/assets/images/x.svg";
import DrawerTracks from "./ui/drawer-tracks";
import DrawerInfo from "./ui/drawer-info/drawer-info";
import Loader from "../../shared/ui/loader";
import { useGetAlbumByIdQuery } from "../../entities/albums/albumApi";
import { useGetTrackByIdQuery } from "../../entities/tracks/tracksApi";

const Drawer = () => {
  const dispatch = useAppDispatch();
  const { activeAlbumId, activeTrackId } = useAppSelector(
    (state) => state.drawerSlice
  );
  const shouldFetchAlbum = activeAlbumId && activeAlbumId.length > 0;
  const {
    data: albumData,
    isFetching: isAlbumLoading,
    error: albumError,
  } = useGetAlbumByIdQuery(shouldFetchAlbum ? activeAlbumId : "", {
    skip: !shouldFetchAlbum,
  });
  const {
    data: trackData,
    isFetching: isTrackLoading,
    error: trackError,
  } = useGetTrackByIdQuery(!shouldFetchAlbum ? activeTrackId : "", {
    skip: shouldFetchAlbum as boolean,
  });

  const handleDrawerClick = () => {
    dispatch(openDrawer(false));
  };
  const isLoading = isAlbumLoading || isTrackLoading;
  return (
    <div
      className="max-w-[490px] overflow-x-hidden overflow-y-auto absolute
    h-full w-full min-w-[355px] top-0 left-0 bottom-0 z-[11] py-[30px] px-[15px] bg-white animate-rollFromRight"
    >
      <button
        onClick={handleDrawerClick}
        className={`opacity-85 absolute top-[15px]
        right-[15px] block w-6 h-6`}
        style={{
          backgroundImage: `url(${X})`,
        }}
      />
      {isLoading ? (
        <Loader />
      ) : albumError ? (
        <div>Error loading album data.</div>
      ) : trackError ? (
        <div>Error loading track data.</div>
      ) : (
        <div>
          {shouldFetchAlbum && albumData && (
            <DrawerInfo
              itemId={albumData._id}
              year={albumData.year}
              artist={albumData.artist}
              genre={albumData.genre}
              title={albumData.title}
              userId={albumData.userId}
              tracksQueue={albumData.tracks}
            />
          )}
          {!shouldFetchAlbum && trackData && (
            <DrawerInfo
              tracksQueue={[trackData]}
              itemId={trackData._id}
              artist={trackData.artist}
              title={trackData.name}
              userId={trackData.userId}
              infoType="track"
            />
          )}
          {shouldFetchAlbum && albumData && (
            <DrawerTracks albumData={albumData} type="small" />
          )}
        </div>
      )}
    </div>
  );
};

export default Drawer;
