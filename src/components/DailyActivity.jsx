import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from "recharts";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function DailyActivity(){
    let params = useParams()
    let userId = params.id

    const [answer, setAnswer] = React.useState()

    React.useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/activity`)
            .then(function (response) {
                // handle success
                setAnswer(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])


    return(
        <section className="daily-activity">
            {answer && <ResponsiveContainer width="100%" height="100%">
                <BarChart width={100} height={100} data={answer.sessions} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="day" tickMargin={10} />
                    <YAxis yAxisId="weight" dataKey="kilogram"  orientation="right"  domain={["dataMin - 10","dataMax + 10"]} tickCount={4} axisLine={false} tickMargin={30}/>
                    <YAxis yAxisId="calories" dataKey="calories"  orientation="left"  domain={["dataMin - 20","dataMax + 20"]} tick={false} axisLine={false}/>
                    <Tooltip />
                    <Bar yAxisId="weight" dataKey="kilogram" barSize={10} radius={[10,10,0,0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#FF0101" width="2px" barSize={10} radius={[10,10,0,0]} name={"calories"}/>
                    <Tooltip />
                    <Legend verticalAlign="top" align="right" iconType={"circle"} height={40} payload={[{ value: 'weight (kg)', type: 'circle', id: 'weight' },{ value: 'Burned calories (kCal)', type: 'circle', id: 'ID02' }]} />
                </BarChart>
            </ResponsiveContainer>}
        </section>
    )
}