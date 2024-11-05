import { ITrackResponse } from "../../../entities/tracks/types";
export interface SearchParams {
  type?: string;
}
export const findProducts = (
  tracks: ITrackResponse[],
  params: SearchParams
) => {
  const type = params.type;
  const filteredTracks = tracks.filter((track) => {});
};
