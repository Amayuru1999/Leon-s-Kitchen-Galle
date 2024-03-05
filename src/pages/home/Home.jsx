import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import React from "react";
import WidgetSm from "../../components/widgetSm/WidgetSm.jsx";
import WidgetLg from "../../components/widgetLg/WidgetLg.jsx";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Sales Analytics" grid dataKey="sales" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
