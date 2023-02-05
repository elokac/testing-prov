import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Blank: 875,
    Printed: 800,
  },
  {
    name: "Feb",
    Blank: 240,
    Printed: 375,
  },
  {
    name: "Mar",
    Blank: 700,
    Printed: 990,
  },
  {
    name: "Apr",
    Blank: 770,
    Printed: 670,
  },
  {
    name: "May",
    Blank: 250,
    Printed: 830,
  },
  {
    name: "Jun",
    Blank: 240,
    Printed: 255,
  },
  {
    name: "Jul",
    Blank: 480,
    Printed: 500,
  },
  {
    name: "Aug",
    Blank: 240,
    Printed: 800,
  },
  {
    name: 'Sep',
    Blank: 349,
   Printed: 430,
  
  },
  {
    name: 'Oct',
    Blank: 349,
   Printed: 430,
  
  },
  {
    name: 'Nov',
    Blank: 349,
   Printed: 430,
  
  },
  {
    name: 'Dec',
    Blank: 349,
   Printed: 430,
  
  },
];

export default function Histogram() {
  return (
    <div className="h-[10px]">
      <p className="font-bold text-center py-3">Blank Cards and Printed Cards Plot</p>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 35,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="left"
            wrapperStyle={{ display: "inline-flex", lineHeight: "40px", rotate: "-90deg" }}
          />
          <Bar dataKey="Blank" fill="#94AAB6" />
          <Bar dataKey="Printed" fill="#273C47" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
