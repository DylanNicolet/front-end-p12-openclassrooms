import React from "react";
import meditation from "../images/meditation.png";
import swimming from "../images/swimming.png";
import bike from "../images/bike.png";
import dumbell from "../images/dumbell.png";

/**
 * Component to display a footer
 * 
 * @component
 * @returns (
 *  <Footer />
 * ) 
 */
export default function Footer(){
    return(
        <footer className="footer">
            <img src={meditation} alt=""  className="footer__activities" />
            <img src={swimming} alt=""  className="footer__activities" />
            <img src={bike} alt=""  className="footer__activities" />
            <img src={dumbell} alt=""  className="footer__activities" />
            <p className="footer__copyright">Copyright, SportSee 2020</p>
        </footer>
    )
    
}
