import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart({ dataPoints }) {
  const dataPointsValue = dataPoints.map((dataPoint) => dataPoint.value);
  const totalValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
