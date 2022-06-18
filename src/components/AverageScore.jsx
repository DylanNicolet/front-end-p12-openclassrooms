import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [{score:0.12}]

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
}

export default function AverageScore(){
    return(
        <ResponsiveContainer width="100%" height="100%" className="score graphics-small">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="score"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    )
}