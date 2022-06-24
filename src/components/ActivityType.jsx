import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";
import Api from "../api/Api.jsx";

export default function ActivityType(){
    let params = useParams()
    let userId = params.id
    let query = "performance" //route provided for API call

    let answer = Api(userId, query);

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