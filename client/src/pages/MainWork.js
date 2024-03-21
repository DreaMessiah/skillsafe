import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import "../styles/mainpageboard.scss"
import "../styles/workpage.scss"
import WorkPage from "../components/WorkPage";

export default function MainWork(){
    return (
        <div className="workpage">
            <WorkPage />
        </div>
    )
}
