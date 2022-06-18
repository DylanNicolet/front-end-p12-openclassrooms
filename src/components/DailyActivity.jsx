import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from "recharts";


const data = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
]



export default function DailyActivity(){
    return(
        <ResponsiveContainer width="100%" height="100%"  className="daily-activity">
            <BarChart width={100} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis dataKey="kilogram" />
                <Bar dataKey="kilogram" />
                <Bar dataKey="calories" fill="#FF0101" width="2px" />
            </BarChart>
        </ResponsiveContainer>
    )
}