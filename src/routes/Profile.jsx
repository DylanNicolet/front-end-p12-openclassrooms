import React from "react";
import Macro from "../components/Macro";

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
                    <Macro />
                    <Macro />
                    <Macro />
                    <Macro />
                </section>
            </section>
        </section>
    )
}