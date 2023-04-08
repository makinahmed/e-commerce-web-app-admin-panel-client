import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "January",
    customer: 45025,
    fees: "22",
  },
  {
    name: "February",
    customer: 40024,
    fees: "23",
  },
  {
    name: "March",
    customer: 37024,
    fees: "24",
  },
  {
    name: "April",
    customer: 39340,
    fees: "28",
  },
  {
    name: "May",
    customer: 40025,
    fees: "28",
  },
  {
    name: "June",
    customer: 41426,
    fees: "28",
  },
  {
    name: "July",
    customer: 11024,
    fees: "28",
  },
  {
    name: "August",
    customer: 41028,
    fees: "28",
  },
  {
    name: "September",
    customer: 18025,
    fees: "28",
  },
  {
    name: "October",
    customer: 31023,
    fees: "28",
  },
  {
    name: "November",
    customer: 20024,
    fees: "28",
  },
  {
    name: "December",
    customer: 21453,
    fees: "28",
  },
];
function Dashboard() {
  return (
    <div>
      <h2 className="flex justify-center font-bold my-5 ">Monthly Customers</h2>
      <div className="flex justify-center">
        <ResponsiveContainer width="50%" aspect={3}>
          <BarChart data={data} width={400} height={400}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="customer" fill="#8883d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
