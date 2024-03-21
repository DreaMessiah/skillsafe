import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import "../styles/mainpageboard.scss"
export default function MainpageBoard(){
    return (
        <div className="backpage">
            <div className="backpage_left"></div>
            <div className="backpage_center">
                <div className="backpage_center_radius"></div>
            </div>
            <div className="backpage_right"></div>
            <div className="backimg"></div>
        </div>
    )
}
