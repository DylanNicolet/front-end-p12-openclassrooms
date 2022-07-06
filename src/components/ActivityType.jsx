import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";
import Api from "../api/Api.jsx";

/**
 * Component to display type of activity performed on a radar chart
 * 
 * @component
 * @returns (
 *  <ActivityType />
 * )
 */
export default function ActivityType(){
    let params = useParams()
    let userId = params.id
    let query = "performance" //route provided for API call

    let answer = Api(userId, query);
    let mysessions = []

    //return kind as the activity name listed in answer.kind
    /**
     * returns the provided numerical kind  as the name matching answer.kind
     * @param   {number} data Number provided by the API
     * @returns {string}      Name of the type of activity
     */
    function refactorKind(data){
        let newKind = answer.kind[data].charAt(0).toUpperCase() + answer.kind[data].slice(1)
        return newKind
    }

    //create new data array with refactored "kind" into the activity name and reverse the order
    if(answer){
        mysessions = answer.data.map(dataObj => (
            {
                value:dataObj.value,
                kind:refactorKind(dataObj.kind)
            }
        )).reverse()
    }


    return(
        <section className="activity-type graphics-small">
            {answer && <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mysessions} margin={ {top: 0, right: 50, bottom: 0, left: 5 }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false}/>
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.8} />
                </RadarChart>
            </ResponsiveContainer>}
        </section>
    )
}