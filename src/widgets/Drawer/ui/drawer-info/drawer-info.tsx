import React, { FC, useState, useMemo } from "react";
import { useGetPublicProfileQuery } from "../../../../entities/profile/profileApi";
import DrawerActionPanel from "../../../../features/drawer/drawer-action-panel/drawer-action-panel";
import UploadTrack from "../../../../shared/ui/upload-track";
import { infoType, titleSize } from "./types";
import ArtistAuthorInfo from "./ui/artist-author-info";
import TitleInfo from "./ui/title-info";
import FormSection from "./ui/form-section";
import TitleSection from "./ui/title-section";
import { ITrackResponse } from "../../../../entities/tracks/types";

interface Props {
  title: string;
  itemId: string;
  userId: string;
  isAuthor?: boolean;
  infoType?: keyof typeof infoType;
  artist?: string;
  year?: number;
  tracksQueue: ITrackResponse[];
  genre?: string;
  titleSize?: keyof typeof titleSize;
}
const DrawerInfo: FC<Props> = ({
  title,
  userId,
  tracksQueue,
  genre,
  infoType = "album",
  isAuthor = false,
  artist,
  year,
  titleSize = "small",
  itemId,
}) => {
  const [isActiveForm, setActiveForm] = useState(false);
  const { data } = useGetPublicProfileQuery(userId);
  const titleLink = infoType === "track" ? "tracks" : "albums";
  const authorName = useMemo(() => data?.name, [data]);
  return (
    <div className="flex flex-col justify-between grow">
      <TitleInfo
        infoType={infoType}
        titleLink={titleLink}
        userId={userId}
        itemId={itemId}
      />
      <TitleSection
        infoType={infoType}
        title={title}
        userId={userId}
        isAuthor={isAuthor}
        titleSize={titleSize}
        itemId={itemId}
        titleLink={titleLink}
      />
      <div className="flex mb-[5px] w-full">
        <div className="w-full">
          <ArtistAuthorInfo
            artist={artist}
            name={authorName}
            userId={userId}
            isAuthor={isAuthor}
            infoType={infoType}
            itemId={itemId}
          />
          <FormSection
            isAuthor={isAuthor}
            isActiveForm={isActiveForm}
            setActiveForm={setActiveForm}
            infoType={infoType}
            genre={genre}
            year={year}
            itemId={itemId}
          />
          <div className="flex justify-between w-full items-center">
            <DrawerActionPanel
              isAuthor={isAuthor}
              userId={userId}
              itemId={itemId}
              itemType={infoType}
              titleLink={titleLink}
              tracksQueue={tracksQueue}
            />
            {isAuthor && infoType === "album" && <UploadTrack />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerInfo;
