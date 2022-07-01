import React from "react";
import axios from "axios";

/**
 * returns data provided by the API call to the backend 
 * @param   {string} userId User's ID provided by useParams from the URL
 * @param   {string} query  Route provided for making API calls
 * @returns {object}        object containing all requested data from the backend
 */
export default function Api(userId, query){
    const [answer, setAnswer] = React.useState()

    React.useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/${query}`)
            .then(function (response) {
                // handle success
                setAnswer(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    return answer
}