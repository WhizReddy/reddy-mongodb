import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../App"; 

const data = [
  { month: "Jan", year: "2023", performance: 56 },
  { month: "Feb", year: "2023", performance: 60 },
  { month: "Mar", year: "2023", performance: 65 },
  { month: "Apr", year: "2023", performance: 67 },
  { month: "May", year: "2023", performance: 78 },
  { month: "Jun", year: "2023", performance: 80 },
  { month: "Jul", year: "2023", performance: 88 },
  { month: "Aug", year: "2023", performance: 70 },
  { month: "Sep", year: "2023", performance: 74 },
  { month: "Oct", year: "2023", performance: 65 },
  { month: "Nov", year: "2023", performance: 64 },
  { month: "Dec", year: "2023", performance: 54 },
  { month: "Jan", year: "2024", performance: 56 },
  { month: "Feb", year: "2024", performance: 67 },
  { month: "Mar", year: "2024", performance: 78 },
  { month: "Apr", year: "2024", performance: 88 },
  { month: "May", year: "2024", performance: 90 },
  { month: "Jun", year: "2024", performance: 92 },
  { month: "Jul", year: "2024", performance: 94 },
  { month: "Aug", year: "2024", performance: 96 },
  { month: "Sep", year: "2024", performance: 98 },
  { month: "Oct", year: "2024", performance: 70 },
  { month: "Nov", year: "2024", performance: 80 },
  { month: "Dec", year: "2024", performance: 85 },
  { month: "Jan", year: "2025", performance: 80 },
  { month: "Feb", year: "2025", performance: null },
  { month: "Mar", year: "2025", performance: null },
  { month: "Apr", year: "2025", performance: null },
  { month: "May", year: "2025", performance: null },
  { month: "Jun", year: "2025", performance: null },
  { month: "Jul", year: "2025", performance: null },
  { month: "Aug", year: "2025", performance: null },
];

export default function Performance() {
  const { darkMode } = useTheme(); 

  return (
    <div className="p-6">
      <h2 className="font-mono text-2xl font-bold mb-4 text-center">
        Performance Over the Months
      </h2>

      <div
        className={`p-4 shadow-md rounded-lg ${
          darkMode ? "bg-[#1c3a3e] text-white" : "bg-white text-black"
        }`}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="5 5"
              stroke={darkMode ? "#666" : "#ccc"}
            />
            <Tooltip
              labelFormatter={(label, props) => {
                if (!props || !props[0] || !props[0].payload) {
                  return label; 
                }
                const { payload } = props[0]; 
                return `${payload.month} ${payload.year}`; 
              }}
              formatter={(value) => `${value}%`} 
              contentStyle={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
              }}
            />

            <Legend wrapperStyle={{ color: darkMode ? "#fff" : "#000" }} />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="#4CAF50"
              strokeDasharray="2 2"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
