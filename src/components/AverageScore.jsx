import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, Cell } from 'recharts';
import { useParams } from "react-router-dom";
import Api from "../api/Api.jsx";


export default function AverageScore(){

  let params = useParams()
  let userId = params.id
  let query = "" //route provided for API call

  let answer = Api(userId, query)
  let data = []
  if(answer){data = [{score:answer.todayScore, max:1}]} // add max:1 to set a reference max value for Recharts
  

  return(
    <section className="score graphics-small">
        {answer && <ResponsiveContainer width="100%" height="100%" className="score graphics-small">
        <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="80%" barSize={5} data={data} startAngle={90} endAngle={450}>
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="score"
          ><Cell fill="#FF0101"/></RadialBar>
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="max"
          ><Cell fill="#FBFBFB"/></RadialBar>
        </RadialBarChart>
      </ResponsiveContainer>}
    </section>
  )
}