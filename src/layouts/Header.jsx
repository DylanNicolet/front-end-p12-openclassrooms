import React from "react";
import logo from "../images/logo.png";

/**
 * Component to display a header
 * 
 * @component
 * @example
 * @returns (
 *  <Header />
 * ) 
 */
export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo of SportSee" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Community</li>
                </ul>
            </nav>
        </header>
    )
}