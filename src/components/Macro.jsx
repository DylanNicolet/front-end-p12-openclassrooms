import React from "react";

//props: color, icon, name, data
export default function Macro(props){
    return(
        <section className="macro">
            <section className={`macro__icon ${props.color}`}>
                <img src={props.icon} alt="" />
            </section>
            <section className="macro__text">
                <h1>{props.data}</h1>
                <p>{props.name}</p>
            </section>
        </section>
    )
}