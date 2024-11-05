import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICreateTrack,
  IProfileTracksRequest,
  ITrackResponse,
  IUpdateTrack,
} from "./types";
import { baseQueryWithTokenCheck } from "../../shared/assets/services/check-cookie-query";
import { IAlbumResponse } from "../albums/types";

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  baseQuery: baseQueryWithTokenCheck,
  tagTypes: ["ProfileTracks", "TrackPage"],
  endpoints: (builder) => ({
    getAllTracks: builder.query<
      ITrackResponse[],
      { count?: number; offset?: number }
    >({
      query: ({ count, offset }) => `tracks?count=${count}&offset=${offset}`,
    }),
    getTrackById: builder.query<ITrackResponse, string>({
      query: (id) => `tracks/${id}`,
      providesTags: ["TrackPage"],
    }),
    getFavoredTracks: builder.query<ITrackResponse[], IProfileTracksRequest>({
      query: ({ id, type = "all", title, artist }) =>
        `tracks/favorite/${id}?type=${type}&title=${title}&artist=${artist}`,
      providesTags: ["ProfileTracks"],
    }),
    getProfileFavoredTracks: builder.query<string[], void>({
      query: () => "tracks/favorite/me",
      providesTags: ["ProfileTracks"],
    }),
    getMultipleTracks: builder.query<ITrackResponse[], string[]>({
      query: (trackIds) => ({
        url: "tracks/multiple",
        method: "POST",
        body: { ids: trackIds },
      }),
      providesTags: ["ProfileTracks"],
    }),
    createTrack: builder.mutation<string, ICreateTrack>({
      query: (body) => ({
        url: `tracks`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["ProfileTracks"],
    }),
    updateTrack: builder.mutation<string, { id: string; body: IUpdateTrack }>({
      query: ({ id, body }) => ({
        url: `tracks/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["TrackPage"],
    }),
    deleteTrack: builder.mutation({
      query: (id) => ({
        url: `tracks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfileTracks"],
    }),
    addFavoriteTrack: builder.mutation<string, string>({
      query: (trackId) => ({
        url: `tracks/favorite/${trackId}`,
        method: "POST",
      }),
      invalidatesTags: ["ProfileTracks"],
    }),
    deleteFavoriteTrack: builder.mutation<string, string>({
      query: (trackId) => ({
        url: `tracks/favorite/${trackId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfileTracks"],
    }),
    searchTrack: builder.query<
      { tracks?: ITrackResponse[]; albums?: IAlbumResponse[] },
      { text: string; type: string }
    >({
      query: ({ text, type }) => ({
        url: `tracks/search?text=${text}&type=${type}`,
      }),
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useGetTrackByIdQuery,
  useGetFavoredTracksQuery,
  useCreateTrackMutation,
  useDeleteTrackMutation,
  useUpdateTrackMutation,
  useSearchTrackQuery,
  useGetMultipleTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
  useGetProfileFavoredTracksQuery,
} = tracksApi;
