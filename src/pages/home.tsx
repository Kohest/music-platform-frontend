import React, { FC } from "react";
import NewAlbums from "../widgets/NewAlbums/new-albums";
import Chart from "../widgets/chart/chart";

const HomePage: FC = () => {
  return (
    <div>
      <NewAlbums />
      <Chart />
    </div>
  );
};

export default HomePage;
