import Cookies from "js-cookie";
import { clearExpiredToken } from "./clear-expired-token";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQueryWithTokenCheck = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  clearExpiredToken();
  const token = Cookies.get("accessToken");
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_API_URL,
    headers,
  });

  return baseQuery(args, api, extraOptions);
};
