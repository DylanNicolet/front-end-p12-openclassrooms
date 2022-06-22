import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from "recharts";
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
                <BarChart width={100} height={100} data={answer.sessions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis dataKey="kilogram" />
                    <Bar dataKey="kilogram" />
                    <Bar dataKey="calories" fill="#FF0101" width="2px" />
                </BarChart>
            </ResponsiveContainer>}
        </section>
        
    )
}