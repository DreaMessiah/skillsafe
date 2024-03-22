import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../styles/workpage.scss"
import Navigation from "./nav/Navigation";
import MainBoard from "./mainboard/MainBoard";
import AllDocs from "./intasks/AllDocs";
export default function DocsPage(){
    return (
        <div className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            <div className="workpage_right">
                <AllDocs />
            </div>
        </div>
    )
}