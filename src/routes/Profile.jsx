import React from "react";
import DailyActivity from "../components/DailyActivity";
import SessionDuration from "../components/SessionDuration";
import ActivityType from "../components/ActivityType";
import AverageScore from "../components/AverageScore";
import Macro from "../components/Macro";
import Calories from "../images/Calories.png";
import Proteins from "../images/Proteins.png";
import Carbs from "../images/Carbs.png";
import Lipids from "../images/Lipids.png";
import Api from "../api/Api.jsx";
import { useParams } from "react-router-dom";


export default function Profile(){
    let params = useParams()
    let userId = params.id
    let query = "" //route provided for API call

    let answer = Api(userId, query)

    return(
        <section className="profile-page">
            <section className="banner">
                <h1>Hello</h1>
                {answer && <h1 className="banner__name">{answer.userInfos.firstName}</h1>}
                <p>Congratulations! You reached yesterday’s goal! 👏</p>
            </section>
            <section className="profile-page__content">
                <section className="profile-page__graphics">
                    <DailyActivity />
                    <SessionDuration />
                    <ActivityType />
                    <AverageScore />
                </section>
                <section className="profile-page__macros">
                    {answer && <Macro color="red" name="Calories" data={answer.keyData.calorieCount} icon={Calories} unit="kCal" />}
                    {answer && <Macro color="blue" name="Proteins" data={answer.keyData.proteinCount} icon={Proteins} unit="g"/>}
                    {answer && <Macro color="yellow" name="Carbs" data={answer.keyData.carbohydrateCount} icon={Carbs} unit="g"/>}
                    {answer && <Macro color="pink" name="Lipids" data={answer.keyData.lipidCount} icon={Lipids} unit="g"/>}
                </section>
            </section>
        </section>
    )
}