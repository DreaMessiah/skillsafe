import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import MainpageBoard from "../components/MainpageBoard";
import "../styles/mainpageboard.scss"

export default function MainPage(){
    return (
        <div className="backpage">
            <MainpageBoard />
        </div>
    )
}
