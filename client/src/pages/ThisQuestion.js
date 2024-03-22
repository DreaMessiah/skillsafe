import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import "../styles/mainpageboard.scss"
import "../styles/workpage.scss"
import WorkPage from "../components/WorkPage";
import AllDocs from "../components/intasks/AllDocs";
import DocsPage from "../components/DocsPage";
import QuestionPage from "../components/QuestionPage";

export default function ThisQuestion(){
    return (
        <div className="workpage">
            <QuestionPage />
        </div>
    )
}
