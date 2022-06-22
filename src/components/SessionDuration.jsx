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
        <section className="speed graphics-small">
            {answer && <ResponsiveContainer width="100%" height="100%">
                <LineChart width={100} height={100} data={answer.sessions}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Line type="monotone" dataKey="sessionLength" />
                </LineChart>
            </ResponsiveContainer>}
        </section>
    )
}