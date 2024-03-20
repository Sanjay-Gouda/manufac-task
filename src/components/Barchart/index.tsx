import ReactEChartsCore from "echarts-for-react";
import * as echarts from "echarts";
import { WINE_DATA } from "../../constants/wineData";

const BarChart = () => {
  const alcoholCategories: { [alcohol: number]: number } = {};
  WINE_DATA.forEach((item) => {
    if (!alcoholCategories[item.Alcohol]) {
      alcoholCategories[item.Alcohol] = item.Magnesium;
    } else {
      alcoholCategories[item.Alcohol] = Math.min(
        alcoholCategories[item.Alcohol],
        item.Magnesium
      );
    }
  });

  // Extract category labels and minimum magnesium values
  const categoryLabels = Object.keys(alcoholCategories);
  const minMagnesiumValues = Object.values(alcoholCategories);

  const options = {
    xAxis: {
      type: "category",
      data: categoryLabels,
      name: "Alcohol", // Label for the x-axis
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium", // Label for the y-axis
    },
    series: [
      {
        data: minMagnesiumValues,
        type: "bar",
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

export default BarChart;
