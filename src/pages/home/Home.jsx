import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";

import React from "react";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Sales Analytics" grid dataKey="sales" />
    </div>
  );
}
