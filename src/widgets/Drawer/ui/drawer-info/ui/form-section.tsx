import React, { FC } from "react";
import AlbumDetails from "./album-details";
import AlbumDetailsForm from "../form/album-details-form";

interface Props {
  isAuthor?: boolean;
  isActiveForm: boolean;
  setActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
  infoType: string;
  genre?: string;
  year?: number;
  itemId: string;
}

const FormSection: FC<Props> = ({
  isAuthor,
  isActiveForm,
  setActiveForm,
  infoType,
  genre,
  year,
  itemId,
}) => {
  const isAlbum = infoType === "album";

  if (isAuthor && isActiveForm && isAlbum) {
    return (
      <AlbumDetailsForm
        genre={genre}
        year={year}
        itemId={itemId}
        setActiveForm={setActiveForm}
      />
    );
  }

  if (isAlbum) {
    return (
      <AlbumDetails
        isAuthor={isAuthor || false}
        genre={genre}
        year={year}
        setActiveForm={setActiveForm}
        isActiveForm={isActiveForm}
      />
    );
  }

  return null;
};

export default FormSection;
