import React, { FC } from "react";
import AlbumActionButton from "../../album/album-action-button/album-action-button";
import AlbumPlayButton from "../../../shared/ui/album-play-button";
import { infoType } from "../../../widgets/Drawer/ui/drawer-info/types";
import { useFavoriteItem } from "../../../shared/hooks/useFavorite";
import { ITrackResponse } from "../../../entities/tracks/types";
interface Props {
  isAuthor: boolean;
  itemId: string;
  itemType?: keyof typeof infoType;
  userId: string;
  titleLink: "albums" | "tracks";
  tracksQueue: ITrackResponse[];
}
const DrawerActionPanel: FC<Props> = ({
  isAuthor,
  itemId,
  userId,
  titleLink,
  tracksQueue,
  itemType = "album",
}) => {
  const { toggleFavorite, isItemFavored } = useFavoriteItem(itemType);
  return (
    <div className="relative flex items-center gap-1">
      <AlbumPlayButton
        size="SMALL"
        className="mr-1"
        tracksQueue={tracksQueue}
        itemId={itemId}
      />
      <AlbumActionButton
        itemId={itemId}
        isAlbumFavored={isItemFavored(itemId)}
        toggleFavorite={toggleFavorite}
        style="WHITE"
        actionType="FAVORITE"
        icon="https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/heart.svg"
      />
      <AlbumActionButton
        buttonLink={titleLink}
        userId={userId}
        itemId={itemId}
        style="WHITE"
        actionType="SHARE"
        icon="https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/share.svg"
      />
      {isAuthor && itemType === "album" && (
        <AlbumActionButton
          itemId={itemId}
          style="WHITE"
          actionType="REMOVE"
          icon="https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/trash-wide.svg"
        />
      )}
    </div>
  );
};

export default DrawerActionPanel;
