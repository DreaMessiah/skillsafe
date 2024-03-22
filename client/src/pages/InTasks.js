import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import "../styles/mainpageboard.scss"
import "../styles/workpage.scss"
import WorkPage from "../components/WorkPage";
import AllDocs from "../components/intasks/AllDocs";
import DocsPage from "../components/DocsPage";

export default function InTasks(){
    return (
        <div className="workpage">
            <DocsPage />
        </div>
    )
}
