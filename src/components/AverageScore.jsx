import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, Cell } from 'recharts';
import { useParams } from "react-router-dom";
import Api from "../api/Api.jsx";

/**
 * Component to display the user's average score as a RadialBarChart
 * 
 * @component
 * @returns (
 *  <AverageScore />
 * ) 
 */
export default function AverageScore(){

  let params = useParams()
  let userId = params.id
  let query = "" //route provided for API call

  let answer = Api(userId, query)
  let data = []
  let averageScorePercentage = ""

  if(answer){
    data = [{score:answer.todayScore, max:1}]// add max:1 to set a reference max value for Recharts
    averageScorePercentage = `${answer.todayScore*100}%`
  } 

  return(
    <section className="average-score graphics-small">
        <h2>Score</h2>
        <section className="average-score__text">
          <h3>{averageScorePercentage}</h3>
          <p>of your goal</p>
        </section>
        {answer && <ResponsiveContainer width="100%" height="100%" className="score graphics-small">
        <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="80%" barSize={5} data={data} startAngle={90} endAngle={450}>
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="score"
            cornerRadius={15}
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