import React from "react";
import { PieChart, Pie, Legend } from "recharts";

const Piechart = () => {
  // Sample data
  const data = [
    { name: "Group A", value: 400, fill: "#0088FE" },
    { name: "Group B", value: 300, fill: "#00C49F" },
    { name: "Group C", value: 300, fill: "#FFBB28" },
    { name: "Group D", value: 200, fill: "#FF8042" },
    { name: "Group E", value: 200, fill: "#8B0000" },
  ];
  const renderColorfulLegendText = (value: string, entry: any) => {
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {value}
      </span>
    );
  };
  return (
    <PieChart width={800} height={400}>
      <Legend
        height={36}
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        iconSize={10}
        formatter={renderColorfulLegendText}
      />
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {/* {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))} */}
      </Pie>
      {/* <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={0}
          endAngle={360}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          blendStroke
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> */}
    </PieChart>
  );
};
export default Piechart;
