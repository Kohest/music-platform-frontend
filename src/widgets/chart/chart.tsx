import React from "react";
import TitleSmall from "../../shared/ui/title-small";
import { Loader } from "lucide-react";
import { useGetAllTracksQuery } from "../../entities/tracks/tracksApi";
import ChartColumn from "../Chart-Column/chart-column";
import ErrorPage from "../../shared/ui/error-page";

const Chart = () => {
  const {
    data: songs,
    isError,
    isLoading,
  } = useGetAllTracksQuery({ count: 10 });
  if (!songs) return <div>Songs not found</div>;
  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;
  const half = Math.ceil(songs.length / 2);
  const firstColumn = songs.slice(0, half);
  const secondColumn = songs.slice(half);
  return (
    <div className="relative">
      <TitleSmall
        href="/home/chart"
        title="Чарт"
        subtitle="Треки, популярные прямо сейчас"
      />
      <div className="mt-[25px]">
        <ChartColumn audioList={firstColumn} />
        <ChartColumn audioList={secondColumn} />
      </div>
    </div>
  );
};

export default Chart;
