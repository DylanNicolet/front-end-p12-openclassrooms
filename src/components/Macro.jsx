import React from "react";
import propTypes, { string } from "prop-types";

Macro.propTypes = {
    color:propTypes.string,
    icon:string,
    name:string,
    data:string
}

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