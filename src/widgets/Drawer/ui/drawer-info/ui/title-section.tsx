import React, { FC } from "react";
import DrawerChangeTitle from "../../../../../features/album/drawer-change-title/drawer-change-title";
import DrawerTitle from "./album-title";
interface Props {
  title: string;
  userId: string;
  infoType: "album" | "track";
  isAuthor: boolean;
  titleSize: "small" | "large";
  itemId: string;
  titleLink: string;
}
const TitleSection: FC<Props> = ({
  title,
  userId,
  infoType,
  isAuthor,
  titleSize,
  itemId,
  titleLink,
}) => {
  return (
    <>
      {isAuthor ? (
        <DrawerChangeTitle itemId={itemId} title={title} itemType={infoType} />
      ) : (
        <DrawerTitle
          href={`/collection/${userId}/${titleLink}/${itemId}`}
          title={title}
          titleSize={titleSize}
        />
      )}
    </>
  );
};

export default TitleSection;
