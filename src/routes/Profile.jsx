import React from "react";
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
                    <section className="daily-activity"></section>
                    <section className="speed graphics-small"></section>
                    <section className="intensity graphics-small"></section>
                    <section className="score graphics-small"></section>
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