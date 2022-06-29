import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useParams } from "react-router-dom";
import Api from "../api/Api.jsx";


export default function DailyActivity(){
    let params = useParams()
    let userId = params.id
    let query = "activity" //route provided for API call

    let answer = Api(userId, query);
    let mysessions = []
    
    //return the day without "0" if it's a single digit number
    function filterWhenTwoDigits(obj){
        if(obj.charAt(obj.length - 2) === "0"){
            return obj.slice(-1)
        } else {
            return obj.slice(-2)
        }
    }
    
    //Create new data array with "day" converted to a single number
    if(answer){
        mysessions = answer.sessions.map(sessionObj => (
            {
                kilogram:sessionObj.kilogram, 
                calories:sessionObj.calories,
                day:filterWhenTwoDigits(sessionObj.day)
            }
        )) 
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div>
             <section className="daily-activity__custom-tooltip">
                <p>{payload[0].payload.kilogram}Kg</p>
                <p>{payload[0].payload.calories}Kcal</p>
             </section>
            </div>
          )
        }
    
        return null
    }

    return(
        <section className="daily-activity">
            <h2>Daily Activity</h2>
            <section className="daily-activity__legend">
                <p className="black-dot">&#x2022;</p><p className="legend-text">Weight (kg)</p><p className="red-dot">&#x2022;</p><p className="legend-text">Burned calories (kCal)</p>
            </section>
            {answer && <ResponsiveContainer width="100%" height="100%">
                <BarChart width={100} height={100} data={mysessions} barGap={8} margin={{top:40, right:0, bottom:5, left:-20}}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey={"day"} tickMargin={7}  tickLine={false}/>
                    <YAxis yAxisId="weight" dataKey="kilogram"  orientation="right"  domain={["dataMin - 10","dataMax + 10"]} tickCount={4} axisLine={false} tickMargin={20} tickLine={false}/>
                    <YAxis yAxisId="calories" dataKey="calories"  orientation="left"  domain={["dataMin - 20","dataMax + 20"]} tick={false} axisLine={false} />
                    <Tooltip content={CustomTooltip} />
                    <Bar yAxisId="weight" dataKey="kilogram" barSize={10} radius={[10,10,0,0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#FF0101" width="2px" barSize={10} radius={[10,10,0,0]} name={"calories"}/>
                </BarChart>
            </ResponsiveContainer>}
        </section>
    )
}