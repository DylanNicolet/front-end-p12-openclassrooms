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

export default function Profile(){
    return(
        <section className="profile-page">
            <section className="banner">
                <h1>Hello</h1>
                <h1 className="banner__name">User</h1>
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
                    <Macro color="red" name="Calories" data="1,930kCal" icon={Calories} />
                    <Macro color="blue" name="Proteins" data="1,930kCal" icon={Proteins} />
                    <Macro color="yellow" name="Carbs" data="1,930kCal" icon={Carbs} />
                    <Macro color="pink" name="Lipids" data="1,930kCal" icon={Lipids} />
                </section>
            </section>
        </section>
    )
}