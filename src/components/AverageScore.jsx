import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";
import axios from "axios";

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
}

export default function AverageScore(){

  let params = useParams()
    let userId = params.id

    const [answer, setAnswer] = React.useState()
    const [myData, setMyData] = React.useState()// Added this to create an array of object for barchart rendering

    //Notion says to use "today-score" as route, which does not exist in the backend
    React.useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}`)
            .then(function (response) {
                // handle success
                setAnswer(response.data.data)
                setMyData([{score:response.data.data.todayScore}])//creates an array of object from the single numerical data received
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])


    return(
      <section className="score graphics-small">
         {myData && <ResponsiveContainer width="100%" height="100%" className="score graphics-small">
          <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={myData}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="score"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </RadialBarChart>
        </ResponsiveContainer>}
      </section>
    )
}