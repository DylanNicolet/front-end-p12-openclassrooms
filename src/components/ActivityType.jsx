import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, RadialBar } from 'recharts';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ActivityType(){
    let params = useParams()
    let userId = params.id

    const [answer, setAnswer] = React.useState()

    //use "performance" instead of "activites" as suggested by the Kanban(Notion)
    React.useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/performance`)
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
        <section className="intensity graphics-small">
            {answer && <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={answer.data}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="kind"/>
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>}
        </section>
        
    )
}