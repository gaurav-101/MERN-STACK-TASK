import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import CrimeData from "./CrimeData";

type ChartProps = {
  chartOptions: Highcharts.Options;
};

export default function Chart({ chartOptions }: ChartProps) {
  return (
    <div className="custom-chart">
      
      <CrimeData/>
    </div>
  );
}
