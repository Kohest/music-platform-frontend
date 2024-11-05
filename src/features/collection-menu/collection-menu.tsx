import React from "react";
import CollectionMenuItem from "./ui/collection-menu-item";
import { useParams } from "react-router-dom";

const CollectionMenu = () => {
  const { id } = useParams();

  return (
    <div className="relative mt-10 mb-[30px]">
      <div className="border-b border-[#e5e5e5] flex uppercase font-bold">
        <CollectionMenuItem text="Треки" href={`/collection/${id}/tracks`} />
        <CollectionMenuItem text="Альбомы" href={`/collection/${id}/albums`} />
      </div>
    </div>
  );
};

export default CollectionMenu;
