import React, { FC, useState } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import heartFull from "../../../shared/assets/images/heart-full.svg";
import { useDeleteAlbumMutation } from "../../../entities/albums/albumApi";
import { useNavigate } from "react-router-dom";
enum ActionType {
  FAVORITE = "FAVORITE",
  SHARE = "SHARE",
  REMOVE = "REMOVE",
}
enum StyleType {
  BLACK = "BLACK",
  WHITE = "WHITE",
  MINI = "MINI",
}
interface Props {
  icon: string;
  buttonLink?: "albums" | "tracks";
  actionType: keyof typeof ActionType;
  itemId?: string;
  userId?: string;
  style?: keyof typeof StyleType;
  toggleFavorite?: (itemId: string) => void;
  isAlbumFavored?: boolean | undefined;
  className?: string;
}
const AlbumActionButton: FC<Props> = ({
  icon,
  actionType,
  buttonLink,
  userId,
  itemId,
  toggleFavorite,
  isAlbumFavored,
  style = "BLACK",
  className,
}) => {
  const navigate = useNavigate();
  const [deleteAlbum] = useDeleteAlbumMutation();
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    switch (actionType) {
      case ActionType.FAVORITE:
        if (itemId && toggleFavorite) toggleFavorite(itemId);
        break;
      case ActionType.REMOVE:
        await handleDeleteAlbum();
        break;
      case ActionType.SHARE:
        handleShare();
        break;
      default:
        break;
    }
  };
  const handleDeleteAlbum = async () => {
    if (itemId) {
      try {
        await deleteAlbum(itemId);
        navigate(-1);
      } catch (error) {
        console.error("Failed to delete album:", error);
      }
    }
  };
  const handleShare = () => {
    navigator.clipboard.writeText(
      `${process.env.BASE_DOMAIN}/collection/${userId}/${buttonLink}/${itemId}`
    );
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };
  return (
    <span className={cn("inline-block", className)}>
      <button
        onClick={(e) => handleClick(e)}
        className={cn(
          "w-10 h-10 rounded-[40px] m-1 cursor-pointer hover:scale-[115%] duration-200 bg-[#222222cc] active:scale-95",
          style === "WHITE" && "bg-white border border-[#ccc]",
          style === "MINI" && "bg-transparent w-6 h-6"
        )}
      >
        <span
          className={cn(
            "w-6 h-6 block bg-cover bg-no-repeat m-auto",
            style === "WHITE" && "",
            style === "MINI" &&
              "w-[16px] h-[16px] opacity-60 mr-1 hover:opacity-100 m-0"
          )}
          style={{
            backgroundImage:
              actionType === ActionType.FAVORITE && isAlbumFavored
                ? `url(${heartFull})`
                : `url(${icon})`,
          }}
        />
      </button>
      {showPopup && (
        <div className="absolute mt-2 p-2 bg-[#222] text-white text-[12px] rounded w-[150px] text-center">
          Ссылка скопирована!
        </div>
      )}
    </span>
  );
};
export default AlbumActionButton;
