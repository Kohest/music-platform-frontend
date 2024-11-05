import React, { FC } from "react";
import { getFullUrl } from "../../../shared/utils/get-full-url";
import AlbumImageUpload from "../../../features/album/album-image-upload/album-image-upload";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  picture?: string;
  isAuthor?: boolean;
  albumId?: string;
  className?: string;
}
const AlbumImage: FC<Props> = ({ picture, isAuthor, albumId, className }) => {
  const pictureBg = picture
    ? `url(${getFullUrl(picture)})`
    : `url('https://music.yandex.ru/blocks/playlist-cover/playlist-cover_no_cover1.png')`;

  return (
    <div className={cn("mb-[10px] w-[200px] h-[200px]", className)}>
      {isAuthor && albumId ? (
        <AlbumImageUpload albumId={albumId} pictureBg={pictureBg} />
      ) : (
        <div
          style={{ backgroundImage: pictureBg }}
          className="w-full h-full bg-no-repeat bg-cover"
        />
      )}
    </div>
  );
};

export default AlbumImage;
