import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, LabelList, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Illustrator', percent: 90,
  },
  {
    name: 'Photoshop', percent: 100,
  },
  {
    name: 'Zeplin', percent: 60,
  },
];

const getColorBar = color => {
  let barColor = '#2197F0';
  if (color === 'blue') barColor = '#2197F0';
  return barColor
}

const Chart = ({ color }) => {

    return (
      <BarChart
        width={350}
        height={300}
        data={data}
        margin={{
          top: 20, left: 20, bottom: 5,
        }}
      >
        <XAxis 
          dataKey="name" 
          orientation="bottom" 
          axisLine={false} 
          tick={{fill: '#000'}} 
          fontSize={20}
          fontFamily="Calibri"
          tickLine={false} />
        <YAxis hide/>
        <Bar dataKey="percent" fill={getColorBar(color)}>
            <LabelList 
              dataKey="percent" 
              position="top" 
              formatter={(value) => `${value}%`} 
            />
        </Bar>
      </BarChart>
    );
}

export default Chart;;

