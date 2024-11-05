import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import HomePage from "../../pages/home";
import AuthPage from "../../pages/auth";
import AuthRoute from "../../shared/hocs/AuthRoute";
import ProfilePage from "../../pages/profile";
import ProtectedRoute from "../../shared/hocs/ProtectedRoute";
import CollectionPage from "../../pages/collection";
import ProfileTracks from "../../features/collection/profile-tracks/profile-tracks";
import ProfileAlbums from "../../features/collection/profile-albums/profile-albums";
import AlbumPage from "../../pages/album-page";
import SearchPage from "../../pages/search";
import HomeLayout from "../layout/home-layout";
import NewReleasesPage from "../../pages/new-releases";
import ChartPage from "../../pages/chart-page";
import TrackPage from "../../pages/track-page";
import ErrorPage from "../../shared/ui/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomeLayout />,
        children: [
          {
            path: "new-releases",
            element: <NewReleasesPage />,
          },
          {
            path: "chart",
            element: <ChartPage />,
          },
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "collection/:id",
        element: <CollectionPage />,
        children: [
          {
            path: "tracks",
            element: <ProfileTracks />,
          },
          {
            path: "albums",
            element: <ProfileAlbums />,
          },
          {
            index: true,
            element: <Navigate to="tracks" replace />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
      {
        path: "collection/:id/albums/:albumId",
        element: <AlbumPage />,
      },
      {
        path: "collection/:id/tracks/:trackId",
        element: <TrackPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
    ],
  },
  {
    path: "auth",
    element: (
      <AuthRoute>
        <AuthPage />
      </AuthRoute>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
