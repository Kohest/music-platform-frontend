import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import heartFull from "../../../shared/assets/images/heart-full.svg";
interface Props {
  isFavored: boolean;
  trackId: string;
  className?: string;
  toggleFavorite: (trackId: string) => void | undefined;
}
const FavoriteButton: FC<Props> = ({
  isFavored,
  trackId,
  toggleFavorite,
  className,
}) => {
  const handleFavoriteClick = (event: any) => {
    event.stopPropagation();
    toggleFavorite(trackId);
  };
  return (
    <div className={cn(className, "mr-[18px] z-[10]")}>
      <div
        className="duration-200 active:scale-75 flex items-center"
        onClick={(event) => handleFavoriteClick(event)}
      >
        <span
          title="Добавить в коллекцию"
          className={cn(
            "inline-block opacity-40 w-6 h-6 bg-cover bg-no-repeat hover:opacity-100"
          )}
          style={{
            backgroundImage: isFavored
              ? `url(${heartFull})`
              : "url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/heart.svg')",
          }}
        />
      </div>
    </div>
  );
};

export default FavoriteButton;
