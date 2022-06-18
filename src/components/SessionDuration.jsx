import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data =  [
    {
        day: 1,
        sessionLength: 30
    },
    {
        day: 2,
        sessionLength: 23
    },
    {
        day: 3,
        sessionLength: 45
    },
    {
        day: 4,
        sessionLength: 50
    },
    {
        day: 5,
        sessionLength: 0
    },
    {
        day: 6,
        sessionLength: 0
    },
    {
        day: 7,
        sessionLength: 60
    }
]

export default function SessionDuration(){
    return(
        <ResponsiveContainer width="100%" height="100%" className="speed graphics-small">
            <LineChart width={100} height={100} data={data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Line type="monotone" dataKey="sessionLength" />
            </LineChart>
        </ResponsiveContainer>
    )
}