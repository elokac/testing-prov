import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "",
    uv: 0
  },
  {
    name: "Jan",
    uv: 300
  },
  {
    name: "Feb",
    uv: 180
  },
  {
    name: "Mar",
    uv: 250
  },
  {
    name: "Apr",
    uv: 390
  },
  {
    name: "May",
    uv: 190
  },
  {
    name: "June",
    uv: 240
  },
  {
    name: "July",
    uv: 300
  },
  {
    name: "Aug",
    uv: 220
  },
  {
    name: "Sept",
    uv: null
  },
  {
    name: "Oct",
    uv: null
  },
  {
    name: "Nov",
    uv: null
  },
  {
    name: "Dec",
    uv: null
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer
      width='100%'
      height='100%'
    >
      <AreaChart
        data={data}
        margin={{
          right: '40'
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="2">
            <stop offset="15%" stopColor="#000000" stopOpacity={0.8}/>
            <stop offset="100%" stopColor="#f5f5f5" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart
