import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProfileResponse } from "./types";
import Cookies from "js-cookie";
import { EnumTokens } from "../services/auth-token.service";
import { IUpdateProfileRequest } from "../auth/types";
import { baseQueryWithTokenCheck } from "../../shared/assets/services/check-cookie-query";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQueryWithTokenCheck,
  tagTypes: ["ProfileInfo"],
  endpoints: (builder) => ({
    getProfile: builder.query<IProfileResponse, void>({
      query: () => `user/profile`,
      providesTags: ["ProfileInfo"],
    }),
    getPublicProfile: builder.query<IProfileResponse, string>({
      query: (id) => `user/profile/${id}`,
      providesTags: ["ProfileInfo"],
    }),
    updateProfile: builder.mutation<IProfileResponse, IUpdateProfileRequest>({
      query: (data) => ({
        url: "user",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ProfileInfo"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetPublicProfileQuery,
} = profileApi;
