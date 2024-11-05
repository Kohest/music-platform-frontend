import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { EnumTokens } from "../services/auth-token.service";
import {
  IAlbumResponse,
  IAlbumsTracksRequest,
  ICreateAlbum,
  IUpdateAlbum,
} from "./types";
import { baseQueryWithTokenCheck } from "../../shared/assets/services/check-cookie-query";

export const albumApi = createApi({
  reducerPath: "albumApi",
  baseQuery: baseQueryWithTokenCheck,
  tagTypes: ["ProfileAlbums", "PageAlbum"],
  endpoints: (builder) => ({
    getAllAlbums: builder.query<
      IAlbumResponse[],
      { count?: number; offset?: number }
    >({
      query: ({ count, offset }) => `album?count=${count}&offset=${offset}`,
    }),
    getAlbumById: builder.query<IAlbumResponse, string>({
      query: (id) => `album/${id}`,
      providesTags: ["PageAlbum"],
    }),
    getALbumsByType: builder.query<IAlbumResponse[], IAlbumsTracksRequest>({
      query: ({ id, type = "all", name, date }) =>
        `album/favorite/${id}?type=${type}` +
        (name ? `&name=${name}` : "") +
        (date ? `&date=${date}` : ""),
      providesTags: ["ProfileAlbums"],
    }),
    getProfileFavoredAlbums: builder.query<string[], void>({
      query: () => `album/favorite/me`,
      providesTags: ["ProfileAlbums"],
    }),
    getMultipleAlbums: builder.query<IAlbumResponse[], string[]>({
      query: (albumsIds) => ({
        url: "album/multiple",
        method: "POST",
        body: { ids: albumsIds },
      }),
    }),
    addFavoriteAlbum: builder.mutation<string, string>({
      query: (albumId) => ({
        url: `album/favorite/${albumId}`,
        method: "POST",
      }),
      invalidatesTags: ["ProfileAlbums"],
    }),
    deleteFavoriteAlbum: builder.mutation<string, string>({
      query: (albumId) => ({
        url: `album/favorite/${albumId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfileAlbums"],
    }),
    createAlbum: builder.mutation<IAlbumResponse, ICreateAlbum>({
      query: (body) => ({
        url: "album",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["ProfileAlbums"],
    }),
    updateAlbum: builder.mutation<
      IAlbumResponse,
      { id: string; body: IUpdateAlbum }
    >({
      query: ({ id, body }) => ({
        url: `album/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["PageAlbum"],
    }),
    removeTrackFromAlbum: builder.mutation<
      string,
      { albumId: string; trackId: string }
    >({
      query: ({ albumId, trackId }) => ({
        url: `album/${albumId}/tracks/${trackId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PageAlbum"],
    }),
    deleteAlbum: builder.mutation<string, string>({
      query: (id) => ({
        url: `album/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfileAlbums"],
    }),
  }),
});
export const {
  useGetAllAlbumsQuery,
  useCreateAlbumMutation,
  useGetAlbumByIdQuery,
  useGetALbumsByTypeQuery,
  useUpdateAlbumMutation,
  useGetProfileFavoredAlbumsQuery,
  useGetMultipleAlbumsQuery,
  useDeleteAlbumMutation,
  useAddFavoriteAlbumMutation,
  useDeleteFavoriteAlbumMutation,
  useRemoveTrackFromAlbumMutation,
} = albumApi;
