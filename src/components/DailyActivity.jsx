import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from "recharts";
import { useParams } from "react-router-dom";
import Api from "../api/Api.jsx";


export default function DailyActivity(){
    let params = useParams()
    let userId = params.id
    let query = "activity" //route provided for API call

    let answer = Api(userId, query);
    let mysessions = []
    
    //Create new data with "day" converted to a single number
    if(answer){
        mysessions = answer.sessions.map(sessionObj => (
            {
                kilogram:sessionObj.kilogram, 
                calories:sessionObj.calories,
                day:sessionObj.day.slice(-1)
            }
        )) 
    }

    return(
        <section className="daily-activity">
            {answer && <ResponsiveContainer width="100%" height="100%">
                <BarChart width={100} height={100} data={mysessions} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey={"day"} tickMargin={10} />
                    <YAxis yAxisId="weight" dataKey="kilogram"  orientation="right"  domain={["dataMin - 10","dataMax + 10"]} tickCount={4} axisLine={false} tickMargin={30}/>
                    <YAxis yAxisId="calories" dataKey="calories"  orientation="left"  domain={["dataMin - 20","dataMax + 20"]} tick={false} axisLine={false}/>
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#FF0101' }}/>
                    <Bar yAxisId="weight" dataKey="kilogram" barSize={10} radius={[10,10,0,0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#FF0101" width="2px" barSize={10} radius={[10,10,0,0]} name={"calories"}/>
                    <Legend verticalAlign="top" align="right" iconType={"circle"} height={40} payload={[{ value: 'weight (kg)', type: 'circle', id: 'weight' },{ value: 'Burned calories (kCal)', type: 'circle', id: 'ID02' }]} />
                </BarChart>
            </ResponsiveContainer>}
        </section>
    )
}