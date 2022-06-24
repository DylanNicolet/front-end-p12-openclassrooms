import React from "react";
import axios from "axios";

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

