import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import { useRemoveTrackFromAlbumMutation } from "../../../entities/albums/albumApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
interface Props {
  className?: string;
  trackId: string;
  albumId: string;
}
const RemoveFromAlbum: FC<Props> = ({ className, trackId, albumId }) => {
  const [removeTrackFromAlbum, { isLoading, error }] =
    useRemoveTrackFromAlbumMutation();
  const handleRemoveTrack = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!albumId) {
      toast.error("Альбом не найден", {
        position: "bottom-right",
      });
      return;
    }
    await removeTrackFromAlbum({ albumId, trackId });
  };
  return (
    <button
      onClick={(event) => handleRemoveTrack(event)}
      className={cn(className, "h-6 w-6 z-10 mr-[18px]")}
      title="Удалить из альбома"
    >
      <span
        className="inline-block opacity-40 hover:opacity-70 duration-200
        bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/circle-crossed_track.svg')]
      bg-cover bg-no-repeat w-6 h-6"
      />
    </button>
  );
};

export default RemoveFromAlbum;
