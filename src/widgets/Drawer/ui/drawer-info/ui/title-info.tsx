import React, { FC } from "react";
import DrawerTitleLink from "./drawer-title-link";
import Explicit from "../../../../../shared/ui/explicit";
import { infoType } from "../types";
interface Props {
  infoType: keyof typeof infoType;
  titleLink: string;
  userId: string;
  itemId: string;
}
const TitleInfo: FC<Props> = ({ infoType, titleLink, userId, itemId }) => {
  return (
    <div className="flex items-center mb-[5px] gap-2">
      <DrawerTitleLink
        text={infoType === "track" ? "Трек" : "Альбом"}
        href={`/collection/${userId}/${titleLink}/${itemId}`}
      />
      <Explicit />
    </div>
  );
};

export default TitleInfo;
