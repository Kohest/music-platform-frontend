import { ITrackResponse } from "../../../entities/tracks/types";

export interface IStateAlbum {
  _id: string;
  title: string;
  genre: string;
  picture: string;
  tracks: ITrackResponse[];
  userId: string;
  __v: number;
}
