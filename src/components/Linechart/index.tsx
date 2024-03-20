import React from "react";
import ReactEChartsCore from "echarts-for-react";
import * as echarts from "echarts";

import { WINE_DATA } from "../../constants/wineData";

type TDataPoint = {
  flavanoids: number | string;
  ash: number | string;
};

const flavanoids_ash_Data: TDataPoint[] = WINE_DATA.map((dt) => {
  return {
    flavanoids: dt.Flavanoids,
    ash: dt.Ash,
  };
});

const LineChart: React.FC = () => {
  //   Prepare data for echarts
  const xAxisData: (string | number)[] = flavanoids_ash_Data.map(
    (item) => item.flavanoids
  );
  const seriesData: (string | number)[] = flavanoids_ash_Data.map(
    (item) => item.ash
  );

  // ECharts options
  const options = {
    xAxis: {
      type: "category",
      data: xAxisData,
      name: "flavanoids",
    },
    yAxis: {
      type: "value",
      name: "ash",
    },
    series: [
      {
        data: seriesData,
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <ReactEChartsCore
      option={options}
      style={{ height: "400px" }}
      echarts={echarts}
    />
  );
};

export default LineChart;
