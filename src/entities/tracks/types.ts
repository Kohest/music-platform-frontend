export interface ITrackResponse {
  _id: string;
  name: string;
  text: string;
  artist: string;
  listens: number;
  picture: string;
  audio: string;
  userId: string;
  comments: string[];
  __v: number;
}
export interface IProfileTracks {
  favoredTracks: string[];
  myTracks: string[];
}
export interface IProfileTracksRequest {
  id: string;
  type?: string;
  title: string;
  artist: string;
}
export interface ICreateTrack {
  name: string;
  artist: string;
  text?: string;
  audio: FormDataEntryValue | null;
  albumId?: string;
}
export interface IUpdateTrack {
  artist: string;
}
