import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SessionDuration(){
    let params = useParams()
    let userId = params.id

    const [answer, setAnswer] = React.useState()

    React.useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
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
        <section className="speed graphics-small graphics-small--bg-red">
            {answer && <ResponsiveContainer width="100%" height="100%" margin={0}>
                <LineChart width={100} height={100} data={answer.sessions} margin={{ top: 0, right: 0, left: -60, bottom: 0 }}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{left: 10, right:10}}/>
                    <YAxis axisLine={false} tick={false}/>
                    <Line type="basis" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false}/>
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>}
        </section>
    )
}