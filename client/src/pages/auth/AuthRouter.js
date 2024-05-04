import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import AuthPage from "./AuthPage";
import "../../styles/mainpageboard.scss"

export default function AuthRouter(){
    return (
        <div className="backpage">
            <AuthPage />
        </div>
    )
}
