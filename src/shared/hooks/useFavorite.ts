import { useCallback } from "react";
import {
  useAddFavoriteAlbumMutation,
  useDeleteFavoriteAlbumMutation,
  useGetProfileFavoredAlbumsQuery,
} from "../../entities/albums/albumApi";
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
  useGetProfileFavoredTracksQuery,
} from "../../entities/tracks/tracksApi";
type ItemType = "album" | "track";
export const useFavoriteItem = (itemType: ItemType) => {
  const { data: profileAlbums } = useGetProfileFavoredAlbumsQuery(undefined, {
    skip: itemType !== "album",
  });
  const { data: profileTracks } = useGetProfileFavoredTracksQuery(undefined, {
    skip: itemType !== "track",
  });
  const [addFavoriteAlbum] = useAddFavoriteAlbumMutation();
  const [removeFavoriteAlbum] = useDeleteFavoriteAlbumMutation();
  const [addFavoriteTrack] = useAddFavoriteTrackMutation();
  const [removeFavoriteTrack] = useDeleteFavoriteTrackMutation();
  const profileItems = itemType === "album" ? profileAlbums : profileTracks;
  const addFavorite =
    itemType === "album" ? addFavoriteAlbum : addFavoriteTrack;
  const removeFavorite =
    itemType === "album" ? removeFavoriteAlbum : removeFavoriteTrack;
  const isItemFavored = useCallback(
    (id: string) => profileItems?.includes(id),
    [profileItems]
  );
  const toggleFavorite = useCallback(
    async (id: string) => {
      if (isItemFavored(id)) {
        try {
          await removeFavorite(id);
        } catch (error) {
          console.error(`Failed to remove ${itemType} from favorites:`, error);
        }
      } else {
        try {
          await addFavorite(id);
        } catch (error) {
          console.error(`Failed to add ${itemType} to favorites:`, error);
        }
      }
    },
    [isItemFavored, removeFavorite, addFavorite, itemType]
  );

  return {
    isItemFavored,
    toggleFavorite,
  };
};
