import { ITrackResponse } from "../tracks/types";

export interface IAlbumResponse {
  _id: string;
  title: string;
  genre: string;
  picture: string;
  year: number;
  tracks: ITrackResponse[];
  userId: string;
  artist?: string;
  __v: number;
}
export interface ICreateAlbum {
  title: string;
  genre: string;
  artist?: string;
  picture?: string;
}
export interface IUpdateAlbum extends Partial<ICreateAlbum> {
  year?: number;
  tracks?: string[];
}
export interface IAlbumsTracksRequest {
  id: string;
  type: string;
  date?: string;
  name?: string;
}
