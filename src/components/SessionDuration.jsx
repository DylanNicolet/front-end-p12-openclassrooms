import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useParams } from "react-router-dom";
import Api from "../api/Api.jsx";

/**
 * Component for displaying average session length on a line chart
 * 
 * @component
 * @returns (
 *  <SessionDuration />
 * )
 */
export default function SessionDuration(){
    let params = useParams()
    let userId = params.id
    let query = "average-sessions" //route provided for API call

    let answer = Api(userId, query)
    let mysessions = []

    /**
     * returns a letter that represents the first letter of the inputed day's name (in french)
     * @param   {number} day  Number representing the day of the week
     * @returns {string}      First letter of the inputed day's name
     */
    function refactorDay(day){
        let letters = ["L","M","M","J","V","S","D"]
        return(letters[day-1])
    }

    //Create new data array with "day" converted to letters
    if(answer){
        mysessions = answer.sessions.map(sessionObj => (
            { 
                day:refactorDay(sessionObj.day),
                sessionLength:sessionObj.sessionLength
            }
        )) 
    }

    //Custom Recharts tooltip for hovering on the line chart
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div>
             <section className="session-duration__custom-tooltip">
                <p>{payload[0].payload.sessionLength} min</p>
             </section>
            </div>
          )
        }
        return null
    }


    return(
        <section className="session-duration graphics-small">
            <h2>Average speed of your sessions</h2>
            {answer && <ResponsiveContainer width="100%" height="100%" margin={0}>
                <LineChart width={100} height={100} data={mysessions} margin={{ top: 50, right: 10, left: 10, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="#ffffff9d" />
                        <stop offset="50%" stopColor="#ffffff9d" />
                        <stop offset="75%" stopColor="white" />
                        <stop offset="100%" stopColor="white" />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{left: 0, right:0}}/>
                    <YAxis axisLine={false} tick={false} hide={true}/>
                    <Line type="basis" dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={2} dot={false}/>
                    <Tooltip content={CustomTooltip} />
                </LineChart>
            </ResponsiveContainer>}
        </section>
    )
}