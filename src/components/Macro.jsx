import React from "react";
import propTypes from "prop-types";



/**
 * Component for displaying the user's key information (nutritional macros)
 * 
 * @component
 * @example
 * const color = "red"
 * const icon = "../images/Calories.png"
 * const name = "Calories"
 * const data = 1500
 * const unit = "Kcal"
 * @returns (
 *  <Macro color={color} icon={icon} name={name} data={data} unit={unit}
 * )
 */
export default function Macro(props){
    return(
        <section className="macro">
            <section className={`macro__icon ${props.color}`}>
                <img src={props.icon} alt="" />
            </section>
            <section className="macro__text">
                <h1>{props.data + props.unit}</h1>
                <p>{props.name}</p>
            </section>
        </section>
    )
}

Macro.propTypes = {

    /**
     * Color of the icon's background
     */
    color:propTypes.string,

    /**
     * Source of the icon image in the repository
     */
    icon:propTypes.string,

    /**
     * Name of the macro to be displayed under the value
     */
    name:propTypes.string,

    /**
     * Numerical data of the desired macro
     */
    data:propTypes.number,

    /**
     * Unit to be displayed after the value
     */
    unit:propTypes.string
}
