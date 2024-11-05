import React, { FC, useEffect } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import { useDeleteTrackMutation } from "../../../entities/tracks/tracksApi";
import { toast } from "react-toastify";
interface Props {
  className?: string;
  trackId: string;
}
const DeleteButton: FC<Props> = ({ className, trackId }) => {
  const [deleteTrack, { isLoading, error }] = useDeleteTrackMutation();
  const handleDeleteTrack = async () => {
    try {
      await deleteTrack(trackId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleDeleteTrack}
      className={cn(className, "h-6 mr-[18px] z-10")}
      title="Удалить трек с площадки"
    >
      <span
        className="inline-block w-6 h-6 bg-cover bg-no-repeat opacity-40 hover:opacity-70 duration-200
      bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/trash-wide.svg')]"
      ></span>
    </button>
  );
};

export default DeleteButton;
