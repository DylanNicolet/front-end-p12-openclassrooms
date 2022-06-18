import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = {
    userId: 12,
    kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
    },
    data: [
        {
            value: 80,
            kind: 1
        },
        {
            value: 120,
            kind: 2
        },
        {
            value: 140,
            kind: 3
        },
        {
            value: 50,
            kind: 4
        },
        {
            value: 200,
            kind: 5
        },
        {
            value: 90,
            kind: 6
        }
    ]
}

export default function ActivityType(){
    return(
        <ResponsiveContainer width="100%" height="100%" className="intensity graphics-small">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    )
}