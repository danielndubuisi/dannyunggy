import "./Chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "February", collectibles: 4000, total: 2400, amt: 2400 },
  {
    month: "March",
    collectibles: 3000,
    total: 1398,
    amt: 2210,
  },
  {
    month: "April",
    collectibles: 2000,
    total: 9800,
    amt: 2290,
  },
  {
    month: "May",
    collectibles: 2780,
    total: 3908,
    amt: 2000,
  },
  {
    month: "June",
    collectibles: 1890,
    total: 4800,
    amt: 2181,
  },
  {
    month: "July",
    collectibles: 2390,
    total: 3800,
    amt: 2500,
  },
  {
    month: "August",
    collectibles: 3490,
    total: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 7 Months (Revenue)</div>
      <div className="graph">
        <AreaChart
          width={730}
          height={350}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="collectibles" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="collectibles"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#collectibles)"
          />
        </AreaChart>{" "}
      </div>
    </div>
  );
};

export default Chart;
