import React from "react";
import axios from "axios";

export default function Api(){
    const [answer, setAnswer] = React.useState()

    React.useEffect(() => {
        axios.get('http://localhost:3000/user/18/activity')
            .then(function (response) {
                // handle success
                setAnswer(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    return(answer)
}